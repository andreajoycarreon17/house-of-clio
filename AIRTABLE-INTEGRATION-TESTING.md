# Airtable Integration Testing Guide

## What was fixed

### Issue 1: Environment variables not loading
**Problem:** Constants like `const TOKEN = process.env.AIRTABLE_TOKEN` were read at module load time, before Next.js injected env vars into the process.

**Fix:** All routes now read env vars **inside functions** at request time.

### Issue 2: Webhook not firing locally
**Problem:** Stripe cannot POST to `localhost` — webhooks only work on deployed URLs.

**Fix:** The `/api/checkout` route now writes to Airtable and sends emails **immediately** when the Stripe Checkout session is created (before redirect). The webhook is still there for production, but local testing no longer depends on it.

### Issue 3: Missing Airtable fields
**Problem:** Code tried to write `Status` and `Curiosity` fields that didn't exist in your Airtable table.

**Fix:** You need to add these fields manually (see below).

---

## Airtable table setup (do this now)

### "The Circle" table — add these fields:

| Field name | Field type | Options |
|---|---|---|
| `Status` | Single select | `Introduced`, `Accepted`, `Active` |
| `Curiosity` | Long text | — |

### "Gatherings" table — add this field:

| Field name | Field type | Options |
|---|---|---|
| `Stripe Session` | Single line text | — |

Everything else in your tables looks correct.

---

## Testing checklist

### Test 1: Apply form (`/apply`)
1. Go to `http://localhost:3000/apply`
2. Fill in name, email, city, curiosity
3. Submit
4. Check your terminal logs — should see:
   ```
   [introduce] Airtable record created: recXXXXXXXXXXXXXX
   ```
5. Check Airtable "The Circle" table — new record should appear
6. Check email inbox — should receive confirmation email

**If it fails:**
- Check terminal for `[introduce] Airtable error:` — this shows the exact Airtable API error
- Verify `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID` in `.env.local`
- Verify table name is exactly `The Circle` (case-sensitive)

---

### Test 2: Booking form (fixed-price format like "The Evening")
1. Go to `http://localhost:3000/book`
2. Click "Enquire about The Evening"
3. Fill in name, email, phone, dietary
4. Click "Confirm and pay"
5. Use Stripe test card: `4242 4242 4242 4242`, any future date, any CVC
6. Complete payment
7. Check terminal logs — should see:
   ```
   [checkout] Airtable Circle record created: recXXXXXXXXXXXXXX
   [checkout] Airtable Gatherings record created: recXXXXXXXXXXXXXX
   [checkout] Confirmation emails sent to test@example.com
   ```
8. Check Airtable — both "The Circle" and "Gatherings" should have new records
9. Check email inbox — should receive confirmation email

**If it fails:**
- Check terminal for `[checkout] Airtable Circle error:` or `[checkout] Airtable Gatherings error:`
- Verify the `Person` field in "Gatherings" is a **Linked record** pointing to "The Circle"
- Verify `Payment Status` field exists in "Gatherings" and is a single select

---

### Test 3: Enquiry form (variable-price format like "City Escape: Paris")
1. Go to `http://localhost:3000/book`
2. Click "Reserve a place on the City Escape to Paris"
3. Fill in name, email, phone, dietary
4. Click "Express interest" (no payment for variable-price formats)
5. Check terminal logs — should see:
   ```
   [enquiry] Airtable record created in The Circle: recXXXXXXXXXXXXXX
   [enquiry] Airtable record created in Gatherings: recXXXXXXXXXXXXXX
   ```
6. Check Airtable — both tables should have new records
7. The "Payment Status" in Gatherings should be `Enquiry` (not `Paid`)

---

## Common errors and fixes

### Error: `UNPROCESSABLE_ENTITY: Could not find table The Circle in application`
**Cause:** Table name mismatch or wrong base ID.

**Fix:**
1. Open your Airtable base
2. Check the exact table name (case-sensitive, including spaces)
3. If it's not exactly `The Circle`, rename it or update the code
4. Verify `AIRTABLE_BASE_ID` in `.env.local` matches the base URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`

### Error: `INVALID_REQUEST_UNKNOWN: Unknown field name: "Status"`
**Cause:** The field doesn't exist in your table.

**Fix:** Add the field manually in Airtable (see table setup above).

### Error: `INVALID_VALUE_FOR_COLUMN: Field "Person" cannot accept the provided value`
**Cause:** The `Person` field in "Gatherings" is not a linked record, or it's linked to the wrong table.

**Fix:**
1. Open "Gatherings" table in Airtable
2. Click the `Person` field header → "Customize field type"
3. Change to "Link to another record"
4. Select "The Circle" as the linked table

### No email received
**Cause:** SMTP credentials are wrong or Resend domain not verified.

**Fix:**
1. Check terminal for `[checkout] Email send failed:` or `[introduce] Error:`
2. Verify `SMTP_PASS` in `.env.local` is a valid Resend API key (starts with `re_`)
3. Log in to Resend dashboard → check domain verification status
4. If domain is not verified, emails will not send

---

## Production webhook setup (do this after deploying to Vercel)

The webhook is **not needed for local testing** anymore — the checkout route writes to Airtable immediately. But for production, you should still set up the webhook so Stripe can notify you of payment events.

### Steps:
1. Deploy to Vercel: `npx vercel`
2. Get your production URL: `https://thehouseofclio.com` (or `https://your-project.vercel.app`)
3. Go to Stripe Dashboard → Developers → Webhooks
4. Click "Add endpoint"
5. Enter URL: `https://thehouseofclio.com/api/webhook`
6. Select event: `checkout.session.completed`
7. Copy the webhook signing secret (starts with `whsec_`)
8. Add to Vercel env vars: `STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXX`
9. Redeploy

The webhook will now fire on every successful payment and create a **second** Airtable record. This is intentional — it ensures no records are lost if the checkout route fails. Gigi can deduplicate records manually in Airtable.

---

## Logs to watch

When testing, keep your terminal open and watch for these log lines:

**Good:**
```
[introduce] Airtable record created: recXXXXXXXXXXXXXX
[checkout] Airtable Circle record created: recXXXXXXXXXXXXXX
[checkout] Airtable Gatherings record created: recXXXXXXXXXXXXXX
[checkout] Confirmation emails sent to test@example.com
[enquiry] Airtable record created in The Circle: recXXXXXXXXXXXXXX
```

**Bad:**
```
[introduce] Airtable error: {"error":{"type":"INVALID_REQUEST_UNKNOWN","message":"Unknown field name: \"Status\""}}
[checkout] Airtable Circle error: {"error":{"type":"UNPROCESSABLE_ENTITY","message":"Could not find table The Circle"}}
[checkout] Email send failed: Invalid login: 535 Authentication failed
```

If you see errors, read the message carefully — it tells you exactly what's wrong.

---

## Next steps

1. Add the missing fields to Airtable (see table setup above)
2. Restart your dev server: `npm run dev`
3. Test the apply form first (simplest flow)
4. Then test the booking form
5. Check Airtable and email inbox after each test
6. If anything fails, check terminal logs and refer to "Common errors" above

Once local testing works, deploy to Vercel and set up the production webhook.
