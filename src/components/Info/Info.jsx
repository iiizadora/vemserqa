import './info.css'

function Info(props){
  return(
    <div className='container-info'>
    <h2 className='titleInfo'>{props.tittleInfo}</h2>
    <p className='textInfo'>{props.textInfo}</p>
    </div>
  )
}

export default Info