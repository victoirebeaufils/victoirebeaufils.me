import React from 'react';
import Layout from '../../components/layout/layout'
import ProjectBanner from '../../components/project-banner/project-banner'
const Mizu = (props)=> {
return(
<Layout>
<ProjectBanner title="Piano map" github="https://www.github.com/victoirebeaufils/pianomap"
            description="A map of public pianos around the world based on user contributions" illustration={pianoMapIcon}
            status="Work in progress"
            date="March 26, 2020">

        </ProjectBanner>
        
</Layout>
)
}

export default Mizu;