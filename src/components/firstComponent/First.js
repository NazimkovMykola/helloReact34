import './Firs.css'
const First = () => {
    let data = "Text"
    function onSpanClick () {
        data = 'New Text'
        console.log(data, ' це нові данні в компоненті')
    }
    return(
        <span onClick={onSpanClick} className='span'>{data}</span>
    )
}

export default First;