# This Could Have Been an Email

En möteskostnadskalkylator. Ställ in antal personer och genomsnittlig timkostnad,
tryck **Starta** och se vad mötet kostar i realtid. Ringen fyller ett varv per timme.

## Köra

Det är en enda fil utan byggsteg. Öppna `index.html` i webbläsaren, eller servera mappen:

```sh
python3 -m http.server 8080
```

Appen fungerar som den är på GitHub Pages (peka Pages mot repots rot).

## Funktioner

- Stoppur med start, paus och återställ. Mellanslag startar/pausar, `R` återställer.
- Kostnaden räknar upp mjukt i realtid. Flikens titel visar kostnaden så den syns även när du byter flik.
- Ändrar du antal personer eller timkostnad mitt i mötet låses kostnaden hittills och nya takten gäller framåt.
- Inställningarna sparas lokalt i webbläsaren.
- Mörkt tema, svenska, belopp i kr.
