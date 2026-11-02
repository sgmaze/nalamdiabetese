# Website Redesign Plan

Status: draft, work happens on the `redesign` branch. Each phase below ships as its own pull request.

## Goals

1. Remove the Tamil translation (English only for now).
2. Update the site from "about to launch" to "we've run camps": new facts, current grades for the team.
3. Keep the code simple enough for high-school contributors.
4. Add a Camps section with results for each camp: Camp 1 (June) and Camp 2 (July). Camp 1 data is still pending, so it gets a placeholder.
5. Add founder and camp photos once approved.
6. Tell the story better now that the work is real.
7. Make room for participant stories later.

## Ground rules for camp data, stories, and photos

These rules apply before anything else, because the repo is public and git keeps every past version of every file.

- **No patient-level data in this repo, ever.** That means no lists of people tested, no individual results, and no spreadsheet with one row per person. Patient-level data also never gets pasted into AI tools.
- **Totals only.** A team member works out the totals from the patient file outside the repo. Only those totals go on the site, for example "140 tested, 22% in the prediabetes range."
- **Hide small groups.** Show any group under about 10 people as "fewer than 10" or as a percentage band. In a single village, small counts can point to specific people.
- **Use A1C ranges, not diagnoses.** Screening isn't a diagnosis. Report results as:
  - below 5.7%: normal range
  - 5.7–6.4%: prediabetes range
  - 6.5% or higher: diabetes range
- **No identifying combinations.** Never combine village, age and result in a way that narrows to a person.
- **Photos.** Founders are minors, so their photos need parent consent. Camp photos must not show readable results, forms or registration sheets. No identifiable participants without written consent.
- **Stories.** Get written consent and use a first name or a pseudonym. A team member adds real stories directly; templates use made-up sample text.

## Phases

### Phase 0: Decisions and housekeeping
- **One name: Nalam Diabetes Foundation.** Use it everywhere: page text, titles, meta descriptions, footer, README. The logo already matches. One place still uses a different name:
  - **Email.** `nalamdiabetictrust@gmail.com` stays until a new address exists.
- **Protect `main` on GitHub.** Done. Contributors need a pull request with 1 approval and can't force-push to `main`. The admin account (`sgmaze`) can still push directly for quick fixes. Merged PR branches are now deleted automatically.
- **Keep the `CNAME` file.** It must stay in `main`, or www.nalamdiabetes.org stops working. The delete/create commits all happened on 2026-02-22 while the custom domain was being set up. Leave the custom domain setting alone so it doesn't happen again.
- **Clean up branches.** Done: deleted the old contributor branches (`adi`, `advi`, `guhan`, `pranav`, `rithi`). They shared no history with `main` and held nothing worth keeping:
  - the rejected "Nalam Diabetes Prevention Foundation" name
  - a consultation photo that `main` removed on purpose
  - older logos (`adi`'s is 6 MB)
- **`.gitignore`.** Done: ignores `.DS_Store`.
- **Name.** Done: "the Nalam Foundation" in Rithika's bio and the footer logo's "Nalam" alt text now read "Nalam Diabetes Foundation." "The Nalam Model" stays as the name of the program.
- **Consent.** Agree on a photo and story consent process, and on who approves.

### Phase 1: Remove Tamil and fix outdated facts (done)
- **Tamil removal.** Done: removed the language toggle, `i18n.js`, `translations/`, the Noto Sans Tamil font, the `i18n-loading` CSS and every `data-i18n*` attribute. Tamil Nadu, Coimbatore and the bilingual health education program are still described on the site.
- **Launch banner.** Done: "Launched May 2026."
- **Stats.** Done: the homepage shows 114 people tested · 2 free A1C testing camps · 5 student founders · launched May 2026. The "25+ per year" claims on About and Our Work are replaced with real numbers.
- **Grades.** Done: Aditya and Rithika are High School Students. Advika stays Middle School.
- **Wording.** Done: About's "Goals for 2026" is now "2026 Milestones" (launch, Camp 1, Camp 2, more camps next, partnerships ongoing). Pre-launch phrases on the homepage and About CTA are updated.
- **README.** Done: rewritten for the English-only site, with how to contribute.

### Phase 2: Camps section (in progress)
- **Built:** `camps.html`, `camp-template.html`, `camp-1.html` and `camp-2.html`, plus a Camps link in every page's menu and footer. Both camp pages show "Results coming soon" until the totals are ready.
- **Partner:** Dr. Vijay Lab provided laboratory and clinic services for Camps 1 and 2, both held in Coimbatore, Tamil Nadu.
- **Camp 2 headline numbers published:** 74 tested; 62 (84%) at A1C 6.0% or higher, 44 (59%) above 7.0%, 35 (47%) above 8.0%. These come from the lab's cutoffs, which don't line up with the standard ranges. The age and gender tables aren't published because several groups are under 10 people.
- **Camp 2 recount requested:** counts below 5.7%, 5.7–6.4% and 6.5% or higher, plus how many already knew they had high blood sugar (or were on diabetes medicine) vs. learned it at the camp.
- **Still needed (totals only):** the count in each A1C range, how many were newly identified vs. already knew, referrals and follow-up, any other partners (doctors, panchayat), who ran it, and lessons learned.
- **`camps.html`.** One card per camp: date, place, number tested, link to the camp page.
- **One page per camp.** All camp pages are copied from one template, `camp-template.html`. Each page has these sections:
  - summary numbers
  - results by A1C range
  - newly identified vs. already knew
  - what happened next (referrals, follow-up)
  - partners (doctors, lab, panchayat)
  - who ran it
  - lessons learned
  - photos
  - thank-yous
- **Pages.** `camp-1.html` (June) and `camp-2.html` (July).
- **Camp 1 placeholder.** Camp 1 uses the same template with a "Results coming soon" box. Filling it in later means editing numbers, not building a page.
- **Charts.** Plain HTML/CSS bars. No chart library.

### Phase 3: Storytelling
- **Homepage as a story:** the problem → what we did → what we found → what happened next → what's next → how you can help.
- **Impact line.** Open with real numbers, e.g. "X people screened across 2 camps; Y learned for the first time they were at risk."
- **Founders' reflections.** A few sentences each on what they saw at the camps.
- **Timeline.** Add one to the About page: idea → registration → Camp 1 (June) → Camp 2 (July) → next.
- **Simpler menu.** Fold "Our Work" into About or Camps, leaving: Home · Camps · About/Team · Stories · Get Involved.

### Phase 4: Photos (after approval)
- **Founder portraits.** These replace the initial-letter circles on the Team page.
- **Camp galleries.** Each camp page gets a small photo gallery.
- **File size.** Resize all images before adding them (aim for under ~300 KB each).

### Phase 5: Participant stories
- **`stories.html`.** Add the page plus a story template: quote, first name or pseudonym, which camp, optional photo.
- **Hidden until ready.** Keep the page out of the menu until real, consented stories exist.

### Phase 6: Contributor guide
- **Stack.** Stay with plain HTML + Tailwind (CDN) and no build step, so anyone can open a file in a browser to preview it.
- **`CONTRIBUTING.md`** covers: how to preview, how to add a camp, how to add a story, how to open a pull request, and the ground rules above.
- **Jekyll (maybe later).** Revisit only if copying the header and footer into every page becomes painful. Jekyll is built into GitHub Pages and would turn camps and stories into simple text files.

## Also worth considering
- **Donations.** Replace the "Donate Now" email link with a real donation link once registration is complete. State whether gifts are tax-deductible.
- **Disclaimer and credits.** Add a "not medical advice" note and credit the clinical partners.
- **Link previews.** Add Open Graph tags so links preview well on WhatsApp and social media.
- **Impact summary.** A printable one-page summary for donors and partners, built from the same totals.

## Open questions
1. Who approves photos and consent?
2. Is the foundation registered (US/India) for accepting donations?
3. Will there be a new email address under the Nalam Diabetes Foundation name?
4. Is "25+ camps a year" still a goal worth stating somewhere?

## Decisions
- Foundation launched May 2026.
- Camp 1 was in June (40 people tested) and Camp 2 in July (74 people tested). Camp 1 results breakdown is still pending. More camps are planned.
- Advika is still in middle school; Aditya and Rithika are in high school.
- The organization's name is Nalam Diabetes Foundation everywhere.
- Camps are named by number (Camp 1, Camp 2, …) with files `camp-N.html`. The month, year and place are always shown next to the name, e.g. "Camp 2 · July 2026 · Coimbatore."
