import './widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article '>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'> 
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {newsArticle('Jeremiah is here to stay', 'Top news - 9099 readers')}
            {newsArticle('Corona virus news update', 'Trending - 5000 readers')}
            {newsArticle('Increase in tech jobs due to COVID-19', 'Top news - 9099 readers')}
        </div>
    )
}

export default Widget
