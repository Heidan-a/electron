const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`
const func = async ()=>{
    const response = await window.versions.ping()
    information.innerText = window.versions.name
    console.log(response)
}
func()