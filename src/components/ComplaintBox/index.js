import './index.css'

const ComplaintBox = (props) =>{

    const {ComplaintBoxListDetails}=props;
    const {id,url,text}=ComplaintBoxListDetails;

    return(<div className='complaintBox-stying'>
        <img src={url} alt={id} className='img-complaintBox'/>
        <p>{text}</p>
        <button className='btn-select'>select</button>
    </div>)
}

export default ComplaintBox;