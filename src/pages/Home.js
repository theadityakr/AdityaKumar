import '../styles/Pages.css'
const Home = () =>{
    return (
        <section className="page" data-page="home" style={{ display: 'block', opacity: 1 }}>
            <div class="page_content project">
                <div class="project_section">
                    <h2 class="project_heading">■ Languages</h2>
                        <div class="project_list">
                        <div class="project_item" >
                            <div class="project_title">C++/C</div>
                            <div class="project_info">(Data Structures and Algorithms)</div>
                        </div>

                        <div class="project_item" >
                            <div class="project_title">Python</div>
                            <div class="project_info">Go, Rust, JavaScript, Java, SQL</div>
                        </div>

                        </div>


                    <h2 class="project_heading">■ Developement</h2>
                        <div class="project_list">
                            {/* Framework /Language */}
                            <div class="project_item" >
                                <div class="project_title">FastAPI,Django</div>
                                <div class="project_info">Flask, Gin, Node.js, Python Selenium, </div>
                            </div>
                            {/* Databse */}
                            <div class="project_item" >
                                <div class="project_title">PostgreSQL</div>
                                <div class="project_info">SQLite, MySQL, CosmosDB(MongoDB), </div>
                            </div>
                            {/* Service Devps*/}
                            <div class="project_item" >
                                <div class="project_title">Jenkins,Azure DevOps</div>
                                <div class="project_info">OpenAI, Redis, Firebase, Docker, Kafka<br></br>Automation Testing, TestRail, </div>
                            </div>
                            {/* Frontend */}
                            <div class="project_item" >
                                <div class="project_title">React,TypeScript</div>
                                <div class="project_info">Electron, Flutter, Tkinter(Python Tk GUI), </div>
                            </div>

                        </div>
            </div>

            </div>
        </section>

    );

}

export default Home;

