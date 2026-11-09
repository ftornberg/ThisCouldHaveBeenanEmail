# This Could Have Been an Email

En möteskostnadskalkylator. Ställ in antal personer och genomsnittlig timkostnad,
tryck **Starta** och se vad mötet kostar i realtid på en animerad ring.

## Köra

Det är en enda fil utan byggsteg och utan npm-beroenden. Öppna `index.html` direkt i webbläsaren, eller starta den inbyggda dev-servern med Node (18 eller senare):

```sh
npm start
```

Appen körs då på http://localhost:8080. Sätt `PORT` för en annan port.

## Funktioner

- **Stoppur** med start, paus, avsluta och återställ. Kostnaden räknar upp mjukt i realtid och fliktiteln visar beloppet.
- **Planerad längd med budget**: sätt t.ex. 30 min så visar ringen hur mycket av tiden som gått. Drar mötet över blir ringen röd och appen visar hur mycket över tid och budget ni är. Utan planerad längd fyller ringen ett varv per timme.
- **Jämförelser i realtid**: "≈ 18 pizzor", "≈ 3 månader Spotify" och liknande roterar under ringen.
- **OB-läge**: procentpåslag för obekväm arbetstid, med varm färgton och etikett.
- **Delbar sammanfattning**: "Mötet tog 37 min med 8 personer och kostade 4 441 kr …" via delningsmenyn eller urklipp.
- **Möteslogg**: Avsluta sparar mötet lokalt. Summor för denna vecka, denna månad och totalt.
- **Kunde ha varit ett mejl**: markera möten med kuvertet så räknar loggen ut hur mycket som hade kunnat sparas.
- **CSV-export** av loggen, anpassad för svensk Excel (semikolon och BOM).
- **Länk med inställningar**: `?people=8&hourly=900&ob=50&planned=30` förifyller kalkylatorn.
- Ändrar du inställningar mitt i mötet låses kostnaden hittills och nya takten gäller framåt.
- Kortkommandon: mellanslag start/paus, `E` avsluta, `R` återställ, `O` OB-tid, `D` dela.
- Allt sparas lokalt i webbläsaren. Ingen data lämnar din enhet.

## GitHub Pages

Workflowet i `.github/workflows/pages.yml` deployar sajten automatiskt vid push till `main`.
Engångsinställning i repot: **Settings → Pages → Source: GitHub Actions**.
Observera att Pages på ett privat repo kräver GitHub Pro/Team/Enterprise; på gratisplan måste repot vara publikt.
