import { Link } from 'react-router-dom'
import ComplaintBox from '../ComplaintBox'
import './index.css'


const ComplaintBoxList=[
    {id:1,
        url:"https://static.vecteezy.com/system/resources/previews/005/925/291/non_2x/initial-letter-a-logo-and-wings-symbol-wings-design-element-initial-letter-a-logo-icon-initial-logo-a-silhouette-vector.jpg",
        text:"Airpoints",
        pathname:"/airpoints",
    },
    {
        id:2,
        url:"https://static.vecteezy.com/system/resources/previews/008/326/114/non_2x/real-estate-building-logo-icon-design-free-vector.jpg",
        text:"At the airport",
        pathname:"/at-the-airport",
    },
    {
        id:3,
        url:"https://static.vecteezy.com/system/resources/previews/021/448/258/original/travel-bag-icon-luggage-illustration-symbol-storage-logo-vector.jpg",
        text:"Baggage",
        pathname:"/baggage",
    },
    {
        id:4,
        url:"https://t3.ftcdn.net/jpg/02/30/04/20/360_F_230042044_T0UEPDX13ZL4kvfCrM20p2fPwknxUTvo.jpg",
        text:"Bookings and airfares",
        pathname:"/bookings-and-airfares",
    },
    {
        id:5,
        url:"https://previews.123rf.com/images/yupiramos/yupiramos1704/yupiramos170407874/75621388-documento-de-papel-aislado-icono-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg",
        text:"Corporate policy",
        pathname:"/corporate-policy",
    },
    {
        id:6,
        url:"https://t4.ftcdn.net/jpg/01/37/42/39/360_F_137423986_zMrijnjNWRjz2aruPYRJLSnpZDSSphqe.jpg",
        text:"Customer service",
        pathname:"/customer-service",
    },
    {
        id:6,
        url:"https://static.vecteezy.com/system/resources/previews/025/440/038/non_2x/no-airplane-sign-no-flight-icon-vector.jpg",
        text:"Delayed, disrupted or rescheduled flight",
        pathname:"/delayed",
    },
    {
        id:6,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHKVzT-vbDld4bLtwC0rtcw29P9tpGV7IZYHDl8YLRSh-hdG-tXpHRYXlGf2p4MbEMGY&usqp=CAU",
        text:"Koru or lounges",
        pathname:"/lounges",
    },
    {
        id:6,
        url:"https://simg.nicepng.com/png/small/353-3533354_seat-png-photo-plane-seat-icon.png",
        text:"On the plane",
        pathname:"/on-the-plane",
    },
]

const ComplaintTop=()=>(
    <div className='Complainttop-conatiner'>
        <div>
            <img src="https://i.pinimg.com/736x/1d/18/1e/1d181e4cc0d1ff804b83aa6510862d57.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
            <p className='complaintTop-para-1'>Leave a compliment</p>
        </div>
        <Link to="/">
        <button className='complainttop-btn'>Change</button>
        </Link>
    </div>
)


const MakeComplaint = () =>{

    return(<div className='complimentFile-main-container'>
    <h1>Help and support</h1>
    <h2>What are you looking to do?</h2>
    <div><ComplaintTop/></div>
    <div>
        <h1>What is your complaint about?</h1>
        <div className='complaintbox-container'>
        {ComplaintBoxList.map(items=><ComplaintBox ComplaintBoxListDetails={items} key={items.id}/>)}
        </div>
    </div>
</div>)
}

export default MakeComplaint;
export {ComplaintTop};