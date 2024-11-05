import '../styles/Pages.css'
const Home = () =>{
    return (
        <section className="page" data-page="home" style={{ display: 'block', opacity: 1 }}>
            <div class="page_content project">
                <div class="project_section">
                    <h2 class="project_heading">■ Languages</h2>
                        <div class="project_list">
                        <a class="project_item text-btn" href="" target="_blank">
                            <div class="project_title">C++/C</div>
                            <div class="project_info">(Data Structures and Algorithms)</div>
                        </a>

                        <a class="project_item text-btn" href="" target="_blank">
                            <div class="project_title">Python</div>
                            <div class="project_info">*Rust, JavaScript, *Java, SQL</div>
                        </a>

                        </div>


                    <h2 class="project_heading">■ Developement</h2>
                        <div class="project_list">
                            {/* Framework /Language */}
                            <a class="project_item text-btn" href="" target="_blank">
                                <div class="project_title">FastAPI,Flask</div>
                                <div class="project_info">Django, Node.js, Python Selenium, </div>
                            </a>
                            {/* Databse */}
                            <a class="project_item text-btn" href="" target="_blank">
                                <div class="project_title">PostgreSQL</div>
                                <div class="project_info">SQLite, MySQL, CosmosDB(MongoDB), </div>
                            </a>
                            {/* Service Devps*/}
                            <a class="project_item text-btn" href="" target="_blank">
                                <div class="project_title">Jenkins,Azure DevOps</div>
                                <div class="project_info">OpenAI, Redis, Firebase, Docker, Kafka<br></br>Automation Testing, TestRail, </div>
                            </a>
                            {/* Frontend */}
                            <a class="project_item text-btn" href="" target="_blank">
                                <div class="project_title">React,TypeScript</div>
                                <div class="project_info">Electron, Flutter, Tkinter(Python Tk GUI), </div>
                            </a>

                        </div>
            </div>

            </div>
        </section>

    );

}

export default Home;

