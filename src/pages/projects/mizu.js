import React from 'react';
import Layout from '../../components/layout/layout'
import mizuIcon from "../../images/mizu_logo.png";
import ProjectBanner from '../../components/project-banner/project-banner'
const Mizu = (props)=> {
return(
<Layout>
<ProjectBanner title="Mizu" github="https://www.github.com/victoirebeaufils/pianomap"
            description="A water quality control app that help map rural areas' water characteristics with a single probe " 
            status="Complete"
            date="Jan 26, 2020"
            illustration={mizuIcon}>

        </ProjectBanner>
        <div className="row technologies">
        <div className=""> <h5><span className="badge  badge-dark react-native-badge">React Native</span></h5>
        </div>
        <div className=""> <h5><span className="badge  badge-dark">Design</span></h5>
        </div>
      </div>
      <br />

        <div class="card">
        <iframe width="375" height="812" src="https://xd.adobe.com/embed/14bc5649-2a4e-459d-7094-7f76152d0603-628d/?fullscreen" frameborder="0" allowfullscreen></iframe>
        </div>
</Layout>
)
}

export default Mizu;