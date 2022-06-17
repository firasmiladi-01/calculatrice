const but = document.querySelectorAll("button");
// const op = document.querySelectorAll(" #les_operations table tr td button");
let res = document.querySelector("#resultat p");
const spec = new Set('=')
spec.add('ce')
spec.add('C')
for (let i = 0; i < but.length; i++) {
    but[i].addEventListener(
        "click",
        () => {
            console.log(but[i].id);
            if (!(spec.has(but[i].id)))
                res.textContent += but[i].id;
            else {
                if (but[i].id == '=') {
                    res.textContent = String(eval(res.textContent));
                }
                else if (but[i].id == 'C') {
                    res.textContent = '';
                }
                else if (but[i].id == 'ce') {
                    res.textContent = res.textContent.slice(0, res.textContent.length - 1)
                }
            }
        })
}