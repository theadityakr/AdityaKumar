
const ProjectsPersonal = () =>{
    return (
        <section class="page" data-page="projects" style={{ display: 'block', opacity: 1 }} >
        <div class="page_content project">
            <div class="project_section">
                <h2 class="project_heading">■ Projects (Develop)</h2>
                <div class="project_list">
                    
                    <a class="project_item text-btn" href="https://effective-ui.vercel.app/" target="_blank">
                            <div class="project_title">Effective-UI</div>
                            <div class="project_info">React-based UI component library with TypeScript, ensuring high performance, scalability, and maintainability</div>
                    </a>
                    <a class="project_item text-btn" href="https://drive.google.com/file/d/1ldzsbVy3uTO_GcHZ1zNF2jidQI9ktGEM/view?usp=sharing" target="_blank">
                            <div class="project_title">xRDP</div>
                            <div class="project_info">Engineered a fast and memory-safe Remote Desktop Protocol (RDP) using Rust<br></br> leveraging the Windows API for secure authentication and real-time screen sharing </div>
                    </a>
                    
                    <a class="project_item text-btn" href="https://github.com/theadityakr/The-Wall" target="_blank">
                            <div class="project_title">The Wall</div>
                            <div class="project_info">Developed public msg app for ios and android. User can register through email and type at the wall </div>
                    </a>

                    <a class="project_item text-btn" href="https://github.com/theadityakr/IoT-Device-Registration-Authentication" target="_blank">
                            <div class="project_title">blockchain.IoT devices & puf</div>
                            <div class="project_info">Enhancing the security of IoT device by automatings<br></br> the registration and authentication process on the blockchain </div>
                    </a>

                    <a class="project_item text-btn" href="https://github.com/theadityakr/Sci-Fi_FPS_Shooter" target="_blank">
                        <div class="project_title">Sci-Fi FPS.shooter</div>
                        <div class="project_info">Dec.2019 </div>
                    </a>

                </div>
            </div>
        </div>
        </section>

    );

}

export default ProjectsPersonal;

