import './tag.scss'
import { Link } from 'react-router-dom'

const Tag = () => {

    const tags = [
        {
            text: 'Klasik',
            url: '/'
        },
        {
            text: 'Pop',
            url: '/'
        },
        {
            text: 'Rock',
            url: '/'
        },
        {
            text: 'Chill',
            url: '/'
        },
        {
            text: 'Hip Hop',
            url: '/'
        },
        {
            text: 'Rock & Metal',
            url: '/'
        },
        {
            text: 'Piyano',
            url: '/'
        },
    ]

    return (
        <div className='tag'>
            {
                tags.map((tag, index) => (
                    <Link key={index} to={tag.url} className='tag__item'>#{tag.text}</Link>
                ))
            }
        </div>
    )
}

export default Tag