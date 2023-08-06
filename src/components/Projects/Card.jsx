import {Button} from 'react-bootstrap/'
import './card.scss'


export default function Card({project}) {
    const {name, img,git_url, tigpages_url, tools} = project
    return (
        <div className="d-flex">
            <div className="d-flex flex-column">
                <img className="p-img" src={img} alt={name} />
                <h5 className='color-primary'>{name}</h5>
            </div>
                <div className="d-flex flex-wrap gap-2">                
                    {
                        tools.map(tool => <Button variant="info" key={tool}>{tool}</Button>)
                    }
                </div>
        </div>
    )
}
