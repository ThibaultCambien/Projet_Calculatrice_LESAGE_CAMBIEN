Évaluation pratique – JavaScript : Calculatrice interactive
Durée : 2h
Support fourni : interface HTML/CSS de calculatrice (boutons 0–9, +, –, ×, ÷, =, C et un
champ d’affichage).
https://github.com/training-dev-fr/project-calculatrice
Objectif : rendre la calculatrice totalement fonctionnelle en JavaScript.
Consignes générales
• Vous ne devez pas modifier le HTML/CSS fourni.
• Tout le comportement doit être géré uniquement en JavaScript.
• Vous pouvez utiliser autant de fonctions que nécessaire.
Étapes à réaliser
1. Affichage des chiffres
Lors du clic sur un bouton chiffre, le nombre correspondant s’affiche dans le champ de la
calculatrice. Plusieurs chiffres peuvent être saisis de suite pour afficher un nombre.
> DOM + événement + manipulation simple (addEventListener, innerHTML)
2. Affichage des opérateurs
Lors du clic sur un opérateur (+, -, ×, ÷), celui-ci s’affiche à la suite dans le champ.
> Créez une fonction séparée pour gérer les opérateurs.
3. Validation de la saisie
Empêcher les saisies invalides :
- Pas d’opérateur en premier.
- Pas deux opérateurs à la suite.
- Un seul opérateur entre deux nombres.
> Utilisation de conditions (if, else if, else)
4. Stockage des valeurs
À chaque saisie, stocker les éléments dans trois variables :
number1, operator, number2;
Ces variables serviront pour exécuter le calcul plus tard.
5. Bouton “C” (clear)
Lors du clic sur le bouton C, vider l’affichage et réinitialiser les variables.
6. Calcul et affichage du résultat
Lors du clic sur =, exécuter le calcul correspondant à l’opérateur choisi et afficher le
résultat à la place de l’opération.
> Ici, on combine conditions, fonctions et manipulation du DOM.
> Exemple :
7. Après un calcul, l’utilisateur peut :
o soit clear,
o soit entrer un nouvel opérateur et un nouveau nombre pour enchaîner les
calculs. Dans ce cas, le résultat du calcul précédent ne peut pas être
modifié.
→ Le résultat précédent devient alors le nouveau number1.
8. Rendre la calculatrice utilisable au clavier :
o touches numériques = chiffres
o + - * / = opérateurs
o Enter = égal
o Escape ou C = clear
9. Si un opérateur est cliqué avant le 2e nombre, et qu’un autre opérateur est ensuite
choisi, le second remplace le précédent au lieu de s’ajouter.