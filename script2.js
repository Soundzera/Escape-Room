let step = 1;

function makeChoice(choice) {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const nextButton = document.getElementById('next-button');

    if (step === 1) {
        if (choice === 1) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, die Fässer als Basis zu verwenden.</p><p>Welche Materialien möchtest du verwenden, um die Grundstruktur zu verbinden?</p>";
        } else if (choice === 2) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, die Bretter aus Holz als Basis zu verwenden.</p><p>Welche Materialien möchtest du verwenden, um die Grundstruktur zu verbinden?</p>";
        } else {
            storyElement.innerHTML = "<p>Du hast dich entschieden, die Metallstücke als Basis zu verwenden.</p><p>Welche Materialien möchtest du verwenden, um die Grundstruktur zu verbinden?</p>";
        }
        choicesElement.innerHTML = `
            <button onclick="makeChoice(4)">Seile</button>
            <button onclick="makeChoice(5)">Kleber</button>
            <button onclick="makeChoice(6)">Metallstücke</button>
        `;
        step++;
    } else if (step === 2) {
        if (choice === 4) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Seile zu verwenden, um die Grundstruktur zu verbinden.</p><p>Welche Materialien möchtest du verwenden, um das Boot wasserdicht zu machen?</p>";
        } else if (choice === 5) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Kleber zu verwenden, um die Grundstruktur zu verbinden.</p><p>Welche Materialien möchtest du verwenden, um das Boot wasserdicht zu machen?</p>";
        } else {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Metallstücke zu verwenden, um die Grundstruktur zu verbinden.</p><p>Welche Materialien möchtest du verwenden, um das Boot wasserdicht zu machen?</p>";
        }
        choicesElement.innerHTML = `
            <button onclick="makeChoice(7)">Plastik</button>
            <button onclick="makeChoice(8)">Karton</button>
            <button onclick="makeChoice(9)">Kleber</button>
        `;
        step++;
    } else if (step === 3) {
        if (choice === 7) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Plastik zur Abdichtung zu verwenden.</p>";
        } else if (choice === 8) {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Karton zur Abdichtung zu verwenden.</p>";
        } else {
            storyElement.innerHTML = "<p>Du hast dich entschieden, Kleber zur Abdichtung zu verwenden.</p>";
        }
        storyElement.innerHTML += "<p>Du hast dein Boot gebaut. Es ist Zeit, es zu testen.</p>";

        const outcome = Math.floor(Math.random() * 3) + 1;

        if (outcome === 1) {
            storyElement.innerHTML += "<p>Dein Boot schwimmt stabil und du kannst entkommen!</p>";
            nextButton.style.display = "inline-block";
            choicesElement.innerHTML = '';
        } else if (outcome === 2) {
            storyElement.innerHTML += "<p>Dein Boot hat Lecks und sinkt langsam. Du musst zurück und die Abdichtung verbessern.</p>";
            choicesElement.innerHTML = '<button onclick="restart()">Neu versuchen</button>';
        } else {
            storyElement.innerHTML += "<p>Dein Boot ist zu schwer und sinkt sofort. Du musst die Struktur überdenken und leichtere Materialien verwenden.</p>";
            choicesElement.innerHTML = '<button onclick="restart()">Neu versuchen</button>';
        }
        step++;
    }
}

function redirect() {
    window.location.href = "spiel.html";
}

function restart() {
    step = 1;
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const nextButton = document.getElementById('next-button');

    storyElement.innerHTML = `
        <p>Du befindest dich auf einer einsamen Insel und musst ein schwebendes Boot bauen, um zu entkommen. Du hast die folgenden Materialien zur Verfügung:</p>
        <ul>
            <li>Fässer (3 Stück)</li>
            <li>Bretter aus Holz (10 Stück)</li>
            <li>Seile (5 Stück)</li>
            <li>Kleber (1 Tube)</li>
            <li>Metallstücke (verschiedene Größen)</li>
            <li>Plastik (5 Platten)</li>
            <li>Karton (10 Stück)</li>
        </ul>
        <p>Welche Materialien möchtest du für die Grundstruktur des Bootes verwenden?</p>
    `;
    choicesElement.innerHTML = `
        <button onclick="makeChoice(1)">Fässer</button>
        <button onclick="makeChoice(2)">Bretter aus Holz</button>
        <button onclick="makeChoice(3)">Metallstücke</button>
    `;
    nextButton.style.display = "none";
}
