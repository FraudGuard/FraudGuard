### **1**

Als Erstes besuchst du die Seite unseres Repositories, indem du den Link "https://github.com/FraudGuard/FraudGuard" in deinem Browser aufrufst.

### **2**

Um die Chrome-Erweiterung zu deinem Browser hinzuzufügen, musst du diese erst herunterladen. Dies machst du, indem du auf die neuste Version klickst.

![root](./src/assets/images/root.png)

### **3**

Hier musst du nun die Version für dein Betriebssystem herunterladen. Anschließend musst du die heruntergeladene Zip-Datei noch entpacken.

![releases](./src/assets/images/releases.png)

### **4**

Jetzt öffnest du deinen Chromebrowser und drückst oben rechts auf das Burger-Menü(⋮) -> Weitere Tools -> Erweiterungen.

![kebab](./src/assets/images/kebab.png)

### **5**

Nun musst du noch den "Entwicklermodus" aktivieren, weil unsere App noch nicht im Chrome Store veröffentlicht ist.

![mode](./src/assets/images/mode.png)

### **6**

Hier angekommen, klickst du dann auf "Entpackte Erweiterung laden" und wählst den Ordner mit der Bennenung "dist" aus, der in der Zip-Datei enthalten ist. Die Chrome-Erweiterung sollte jetzt geladen und einsatzbereit sein.

![unpack](./src/assets/images/unpack.png)

### **7**

Sobald du jetzt auf die eBay-Kleinanzeigen Webseite wechselst, werden die Anzeigen, welche wir bereits in der Datenbank gespeichert haben, mit einer Wahrscheinlichkeit markiert. Die analysierten Anzeigen werden in vier Kategorien eingestuft:

- Unwahrscheinlich,
- geringe Wahrscheinlichkeit,
- wahrscheinlich,
- sehr wahrscheinlich,

![tags](./src/assets/images/tags.png)

### **8**

Wenn du eine Anzeige siehst, die noch keine Markierung hat, kannst du auf diese klicken und auf den "Anzeige prüfen" Knopf drücken, um die Betrugswahrscheinlichkeit angezeigt zu lassen.
Hinweis: Das kann manchmal ein bisschen länger dauern, weil unser Server nach zu langer Inaktivität in den Ruhemodus schaltet.

![button](./src/assets/images/button.png)

Nachdem du den Knopf gedrückt hast, wird die analysierte Anzeigen in einer der vier Kategorien eingestuft.
Hinweis: bisher wird die Auswertung des Scores noch nicht abgespeichert - wenn du also die Seite neu läds ist das Ergebnis leider nicht mehr da :( (das wollen wir aber noch angehen)

![analyze](./src/assets/images/analyze.png)
