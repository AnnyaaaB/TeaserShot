import {projects} from "./data"
import Card from "./Card"
const TeaserStories = ({theme}) => {
  return (
    <div>
        {
            projects.map((project,index) => {
                return <Card theme = {theme} key={index} {...project}/>
            })
        }
    </div>
  )
}

export default TeaserStories 