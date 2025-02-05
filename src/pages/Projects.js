
const Projects = () =>{
    return (
        <section class="page" data-page="projects" style={{ display: 'block', opacity: 1 }} >
        <div class="page_content project">
            <div class="project_section">
                <h2 class="project_heading">■ Projects (Develop)</h2>
                <div class="project_list">
                
                    <a class="project_item text-btn" href="https://qloudbackups.azurewebsites.net/" target="_blank">
                            <div class="project_title">Qloud.Backups</div>
                            <div class="project_info">A comprehensive account backup and restore solution for Quickbooks<br></br>enabling real-time change tracking and facilitating precise restoration of entities to specific dates and times</div>
                    </a>
                    <a class="project_item text-btn" href="https://qloudai.azurewebsites.net/" target="_blank">
                            <div class="project_title">Qloud.AI</div>
                            <div class="project_info">An AI-powered application for invoice and receipt processing, bank reconciliation<br></br>invoice reminders, and payment scheduling of quickbooks using AzureOpenAI.<br></br> Also integrated a chatbot for queries related to quickbooks data </div>
                    </a>

                    <a class="project_item text-btn" href="https://app4insights.azurewebsites.net/" target="_blank">
                            <div class="project_title">Apps4Insights</div>
                            <div class="project_info">AI-powered chatbot platform for transcribing client audio, video, and text files,<br></br> enabling the support team to query and
                                retrieve specific historical call and chat data</div>
                    </a>

                    <a class="project_item text-btn" href="https://www.appsadder.net/" target="_blank">
                            <div class="project_title">QBO Electron App</div>
                            <div class="project_info">Developed Electron applications, including a QuickBooks Online app with enhanced features like<br></br> automated report backups<br></br> and a file-sharing/viewing app utilizing GitHub repositories, both prepared for RD Webclient </div>
                    </a>
    
                </div>
            </div>
        </div>
        </section>

    );

}

export default Projects;

