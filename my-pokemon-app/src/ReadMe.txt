I denne opgave har jeg arbejdet og bearbejdet hvordan man muligvis kunne lave et pokedex
i et frontend development program som Angular.

Funktioner:
Desværre blev det ikke til det helt store da undervejs generede jeg en bug som ødelagde battle systemet
siden jeg ikke kunne finde ud af hvordan dette kunne løses gad jeg hellere at aflevere et program der virkede
selvom battle-systemet ikke blev til det helt store var der stadig lagt op til at man kunne bruge moves fra spillet

Der kan stadig generes pokemons og fra alle generations(altså 1008 pokemons) derfra kan man se dens stats
med alt fra køn(som bliver generet baseret på en 50% chance for hvert køn), vægt, højde til dens types og abilities
Derfra tog den 4 random moves den individuelle pokemon kunne lærer og gav det til den pokemon. Dette ville havde betydet
at hver kamp ville blive anderledes selv hvis man fik 1/1008 chance for at kæmpe mod den samme pokemon som man selv havde
Sidst kan man trykke på knappen for at se dens stats som stadig er den samme. Der var tænkt at man burde kunne lvl up
men siden at battlesystemet gik i stykker kunne dette ikke lade sig gøre.

Design:
Jeg designede interfacen som om at på venstre side skulle man kunne se alle pokemonens stats og moves så der var
plads til at hele højre side kunne virke som battle og med en tab så man kunne åbne pokedexet. Jeg valgte en simple farvepallet
så det var nemt at tilgå og gjorde sådan at man altid kunne se billeder af de pokemon man generede
Ideen med at man havde alle stats til venstre og man kunne se pokemons før man kæmpede mod dem så man altid kunne fange de bedste
var en god ide men bare dårlig eksekveret fra min side af


Angular som frontend:
Angular har sine fordele og ulemper siden at man ja kan bygge en hjemmeside. Dog mangler angular mange funktioner som
andre frontend systemer har. Det var dog en sjov øvelse at gå ud fra min comfort zone og prøve en anden frontend 
da jeg ellers meget af tiden kun fokuserede på en frontend løsning.

