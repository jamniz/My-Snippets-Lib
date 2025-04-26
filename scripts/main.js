document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Insertion "snippet1"
        const snippet1Html = await fetch("snippets/snippet1/snippet1.html").then(response => response.text())
        document.getElementById("snippet-1").innerHTML = snippet1Html

    } catch (error) {
        console.error("Une erreur est survenue :", error)
    }

    const btnTop = document.getElementById("btn-top")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) { // Affiche après 60px de scroll
            btnTop.classList.add("visible")
        } else {
            btnTop.classList.remove("visible")
        }
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })

    // Création "sommaire" A-snippets
    const sommaire1 = document.getElementById("sommaire1")
    const aSnippetsSection = document.getElementById("A-snippets")
    const summariesA = aSnippetsSection.querySelectorAll("details > summary")

    let items = []

    summariesA.forEach(summary => {
        const parent = summary.parentElement  // Trouve le <details> parent
        if (parent.id) {
            items.push({ title: summary.textContent.trim(), id: parent.id })
        }
    })

    // Trier A-Z
    items.sort((a, b) => a.title.localeCompare(b.title))

    // Générer 
    items.forEach(item => {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = `#${item.id}`
        a.textContent = item.title
        li.appendChild(a)
        sommaire1.appendChild(li)
    })
})