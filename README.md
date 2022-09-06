# Pontozó Rendszer

## Működés

Az oldalon egy egyszerű pontozó rendszer látható.

A navigációs menüben (felül) található maga az applikáció "neve", egy pontszámláló, egy gomb, ami a hibákat/problémákat mutatja (ha vannak) és egy százalékot jelző állapotjelző.

Maga az applikáció egy oldalból áll, melyen maga a pontozó rendszer látható. Tartalma:

-   Lapok címkéje felül, navigációt segítendő és információt tartalmaznak a pontozás állapotáról
    -   Lapok címkéjén látható az adott feladathoz tartozó szempontok száma és hány darab van kitöltve a kötelezőekből
-   Gombok alul, szintén navigációt segítendő
-   Minden Lapon az adott feladathoz tartozó szempontok láthatóak különböző beviteli mezőkkel
-   Beviteli mezők validációja:
    -   Minden mező lehet kötelezően töltendő, vagy opcionális
    -   Típusaik:
        -   Select
        -   Number - Text Field
        -   Checkbox
    -   Megjegyzés: a maximális pontszám megjelenítése hiányzik a beviteli mezők mellől

JSON file, ami alapján megjelenik maga a pontozó rendszer:

```
{
  "name": "Verseny neve",
  "tasks": [
    {
      "name": "1. feladat",
      "aspects": [
        {
          "id": 11,
          "name": "1. szempont",
          "type": "list",
          "values": {
            "good": 5,
            "bad": 0
          },
          "required": true
        }
      ]
    },
    {
      "name": "2. feladat",
      "aspects": [
        {
          "id": 21,
          "name": "1. szempont",
          "description": "1. szempont leírása",
          "type": "number",
          "maxValue": 5,
          "required": true
        },
        {
          "id": 22,
          "name": "2. szempont",
          "description": "2. szempont leírása",
          "type": "number",
          "maxValue": 4,
          "required": true
        },
        {
          "id": 23,
          "name": "3. szempont",
          "description": "3. szempont leírása",
          "type": "number",
          "maxValue": 6,
          "required": true
        },
        {
          "id": 24,
          "name": "4. szempont",
          "description": "4. szempont leírása",
          "type": "number",
          "maxValue": 4,
          "required": false
        }
      ]
    },
    {
      "name": "3. feladat",
      "aspects": [
        {
          "id": 31,
          "name": "1. szempont",
          "type": "boolean",
          "value": 2
        }
      ]
    }
  ]
}
```
