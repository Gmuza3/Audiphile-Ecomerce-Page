import { Others } from '../../../Static/type'
import Button from '../../UI/Button'
import style from '../style.module.css'
import { useNavigate } from 'react-router-dom'

type Props={
    otherProducts: Others[]
}

const OtherProducts =(props:Props) =>{
    const navigate=useNavigate();
    const{otherProducts} = props;
    console.log(otherProducts)
    return(
        <>
            <h6>you may also like</h6>
            <ul className={style['list-zone']}>
                {otherProducts?.map((item,index)=>{
                    return(
                        <li key={index}>
                            <div className={style["list-item-imgZone"]}>
                                <img src={`http://${window.location.host}/${item.image.desktop}`} alt="" />
                            </div>
                            <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",gap:'32px',background:"#fff",width:"100%",height:'auto',paddingTop:"40px"}}>
                                <div className={style['list-item-nameZone']}>
                                    <h6>{item.name}</h6>
                                </div>
                                <div className={style['list-item-buttonZone']}>
                                    <Button 
                                        text={"See Product"} 
                                        handleClick={() => navigate(`/product/${item.slug}`)} 
                                        buttonName={'btn-primary-link'} />
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default OtherProducts