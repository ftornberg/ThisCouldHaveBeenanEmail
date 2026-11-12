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
- **Tål viloläge**: tiden räknas på väggklockan, så tid och kostnad stämmer även om fliken legat i bakgrunden eller mobilen varit låst.
- **Pågående möte sparas**: laddas sidan om, eller kastar webbläsaren ut fliken, fortsätter mötet där det var. Flera öppna flikar hålls i synk.
- **Håll skärmen vaken**: skärmen släcks inte medan mötet pågår (Screen Wake Lock). Går att stänga av i inställningarna.
- Fliktiteln fortsätter visa kostnaden även när fliken ligger i bakgrunden.
- Allt sparas lokalt i webbläsaren. Ingen data lämnar din enhet.

### Begränsning

En webbsida kan inte köra kod medan mobilen är låst. Appen räknar därför ikapp när den visas igen i stället för att ticka i bakgrunden. Resultatet blir detsamma, men ingen avisering kan skickas från en låst mobil.

## GitHub Pages

Workflowet i `.github/workflows/pages.yml` deployar sajten automatiskt vid push till `main`.
Engångsinställning i repot: **Settings → Pages → Source: GitHub Actions**.
Observera att Pages på ett privat repo kräver GitHub Pro/Team/Enterprise; på gratisplan måste repot vara publikt.

## Cloudflare

Sajten kan även publiceras som en Cloudflare Worker med statiska filer. `wrangler.jsonc` pekar ut repots rot och `.assetsignore` ser till att bara appen laddas upp.

Koppla repot under **Workers & Pages → Create → Import a repository** med projektnamnet `moteskostnad`, tomt byggkommando och deploy-kommandot `npx wrangler deploy`. Namnet måste stämma med `name` i `wrangler.jsonc`. Varje push till `main` publiceras då på `moteskostnad.<kontonamn>.workers.dev`.
