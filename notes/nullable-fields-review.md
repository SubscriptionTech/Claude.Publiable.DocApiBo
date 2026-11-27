# Nullable fields review

## Context

On 2026-11-27, a rule was added to `shared/ProAbonoBO/specs/convention.md` (section *Partial updates*): on any `PATCH` of the API Backoffice, a field sent as `null` is cleared, and an absent field keeps its value.

To reflect it, every field of the `<Resource>Update` schemas in the OpenAPI spec (`shared/ProAbonoBO/open-api/`) was marked `nullable: true`, without checking each field against the API. These fields were left without `nullable`: booleans, enums, `Metadata`, and the fields listed in a schema's `required` list (`FeatureUpdate.Name`, `FeatureUpdate.Order`).

## To review

1. For each field marked `nullable: true` in a `<Resource>Update` schema, check that the API really accepts `null` and clears the field; remove `nullable` from the others. Doubtful cases: `Name`, `Country`, `Order`, and the amounts such as `AmountRecurrence` — `null` may clear the value, reset it to a default, or return a `422`.
2. Check what `null` does on a boolean or an enum field: rejected, reset to a default, or ignored.
3. Check which fields are `null` in responses and which are absent when not set. Both forms exist in the docs today: SegmentSettings omits unset fields, while TaxProfile documents `DateEnd` as `null`.
4. `DiscountUpdate.CountPeriods` and `discount.update.md` say "absent means unlimited", which contradicts the partial update rule (absent means unchanged). Confirm how an unlimited discount is set on a `PATCH`, probably with `null`.
5. Report the outcome in the resource docs, admin resources included: the `## Request body` tables of the `*.update.md` files carry no nullability today (a type reads `string`, never `string | null`).
