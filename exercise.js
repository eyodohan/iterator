function fn (metin) {
    let diz = []
    function sirala (){
        for (let i = 0; i<metin.length; ++i){
            diz = diz.push(metin[i])
        }
        return diz
    }
    return sirala
}


const text = "Hello, world"
const getText = fn(text)

const element1 = getText()
console.log(element1)
