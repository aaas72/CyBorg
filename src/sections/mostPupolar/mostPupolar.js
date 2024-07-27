import './mostPupolar.css'
import {Card, Button} from '../../coomponet/index'


const MostPupolar = () => {
    return(
        <>
            <div className='section-wrapper '>
                <div className='section-header'>
                    <h2> <span style={{ textDecoration: 'underline' }}>Most Pupolar</span>  <span style={{color:'#4ECCA3'}}>Right Now</span></h2>
                </div>
                <div className='post-pupolar-items'>
                   <Card title="Speed"/>
                   <Card title="GTA"/>
                   <Card title="Call Duty"/>
                   <Card title="FIFA"/>
                   <Card title="Speed"/>
                   <Card title="GTA"/>
                   <Card title="Call Duty"/>
                   <Card title="FIFA"/>
                </div>
                <Button text='SHOE MORE'/>
            </div>
        </>
    )
}

export default MostPupolar