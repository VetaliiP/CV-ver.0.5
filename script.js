// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

window.onload = function() {
    document.getElementById('LOAD_SPACE').innerHTML = htmlContentAboutSkills;
    openTab('SKILLS'); 
}


function handleClick(event) {
    const loadSpace = document.getElementById('LOAD_SPACE');

    const elementId = event.target.id;

    function clearDiv() {
        const myDiv = document.getElementById('LOAD_SPACE');
        myDiv.textContent = '';
        while (myDiv.firstChild) {
            myDiv.removeChild(myDiv.firstChild);
        }
    }
    clearDiv();

    switch (elementId) {
        case 'CV':
            loadSpace.innerHTML = htmlContentAboutMe;
            break;
        case 'EXPERIENCE':
            loadSpace.innerHTML = htmlContentAboutExp;
            break;
        case 'SKILLS':
            loadSpace.innerHTML = htmlContentAboutSkills;
            break;
        case 'HOBBY':
            loadSpace.innerHTML = htmlContentAboutPortfolio;
            break;
        default:
          alert('ERROR');
    }
}


const htmlContentAboutMe = `
                <div id="ABOUT-ME">
                    <div class="intro text-box">
                        <p>
                                Вітаю, мене звати <strong>Перерва Віталій</strong>, я розробник <strong>почактівець</strong>
                            із знанням різноманітних мов програмування. Я створив цей сайт у якості резюме та демонстрації
                            своїх вмінь та знань. 
                        </p>
                    </div>
                    <div class="main text-box">
                        <p>
                                На жаль я не маю комерційного досвіду розробки веб сторінок і додатків, але маю чималий <strong>досвід викладача </strong>
                            із програмування ,а також <strong>досвід керівника</strong> невеликих навчальних закладів та <strong>керівництва персоналу</strong>. Протягом 
                            всієї кар'єри більш за все уваги я придиляв <strong>навчанню</strong>, тому мене дуже цікавлять вакансії із можливостю
                            <strong>навчатися та розвиватися</strong>. Вмію самоорганізовуватися та займатися самостійним навчанням в будь якому напрямку. 
                        </p>
                    </div>    
                    <div class="photo">
                        Тут фото
                    </div>
                    <div class="conclusion text-box">
                        <p>
                                Зокрема веб розробки мене також цікавить робота в області <strong>робототехніки, автоматизації</strong>, та особливо <strong>3D друку</strong>
                            або підтримка та налаштування різних ЧПУ верстатів та 3D принтерів.
                        </p>
                    </div>
                    
                </div>
`;

const htmlContentAboutExp = `
                <div  id="ABOUT-EXP">
                    <div class="event-above">
                        <div class="education-1">
                            <div class="event-name">
                                <h6>
                                    Мелітопольський інститут 
                                    державного та муніципального 
                                    управління 
                                    «Класичного приватного унверситету»
                                </h6>
                            </div>
                            <div class="event-date">2015-2019</div>
                            <div class="event-description">
                                <p>
                                    Технічний фахівець 
                                    у галузі прикладних
                                    наук та техніки.
                                </p>
                                <p>
                                    Напрямок: Системний аналіз.
                                </p>
                            </div>
                            
                        </div>
                        <div class="education-2">
                            <div class="event-name"><h6>Компанія "ROBOCODE" м.Київ</h6></div>
                            <div class="event-date">2020</div>
                            <div class="event-description">
                                <p>
                                    Курси підготовки з 
                                    педагогіки та психології
                                    в освітній сфері.
                                </p>
                            </div>
                            
                        </div>
                        <div class="education-3">
                            <div class="event-name"><h6>Компанія "ROBOCODE" м.Київ</h6></div>
                            <div class="event-date">2020</div>
                            <div class="event-description">
                                <p>
                                    Курси з розрокби ігр 
                                    в середовищі Unity.
                                    Програмування на C#
                                </p> 
                            </div>
                            
                        </div>
                        <div class="education-4">
                            <div class="event-name"><h6>Компанія "ROBOCODE" м.Київ</h6></div>
                            <div class="event-date">2021</div>
                            <div class="event-description">
                                <p>
                                    Курси з веб розрокби
                                    в середовищі VS code. 
                                    Программування на:
                                </p>
                                <div>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="timeline">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="event-below">
                        <div class="work-1">
                            
                            <div class="event-name"><h6>Енергодарська ДЮСШ №1</h6></div>
                            <div class="event-date">2015-2020</div>
                            <div class="event-description">
                                <h6>
                                    Керівник гуртка робототехніки
                                </h6>
                                <div style="padding-left:20px;">
                                    <ul>
                                        <li>Розробка навчальних програм та планів для участників гуртка.</li>
                                        <li>Керівництво роботою команди інструкторів та викладачів.</li>
                                        <li>Участь у розробці та впровадженні нових проектів в галузі робототехніки.</li>
                                        <li>Забезпечення підтримки та обслуговування обладнання, що використовується у навчальному процесі.</li>
                                        <li>Співпрацював з місцевими школами для популяризації робототехніки та STEM-дисциплін.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="work-2">
                            
                            <div class="event-name"><h6>Компанія "ROBOCODE" м.Київ</h6></div>
                            <div class="event-date">2019-2023</div>
                            <div class="event-description">
                                <h6>
                                    Керівник приватної школи програмування та робототехніки
                                </h6>
                                <div style="padding-left:20px;">
                                    <ul>
                                        <li>Координація роботи викладачів та інструкторів у приватній школі.</li>
                                        <li>Розробка та управління навчальними програмами з програмування та робототехніки.</li>
                                        <li>Організація та проведення позакласних заходів та змагань з робототехніки.</li>
                                        <li>Створення нових курсів та оновлення існуючих навчальних матеріалів з робототехніки та програмування.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
`;

const htmlContentAboutSkills = `
<div id="ABOUT-SKILLS">
                    <div class="deployment-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="docker nl">Docker</div>
                        </div>
                    </div>
                    <div class="api-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="rest nl">REST</div>
                            <div class="graphql nl">GraphQL</div>
                        </div>
                    </div>
                    <div class="auth-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="jwt nl">JSON Web Tokens</div>
                            <div class="oauth nl">OAuth</div>
                        </div>
                    </div>
                        <div class="data-base-box">
                            <div class="logo-skills">
                                <div></div>
                            </div>
                            <div class="icon-skills">
                                <div class="sql nl">SQL</div>
                                <!-- <div class="nosql">NoSQL</div>
                                <div class="orm">ORM</div> -->
                            </div>
                        </div>
                    <div class="state-management-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="redux nl">Redux</div>
                            <div class="mobx nl">Mobx</div>
                        </div>
                    </div>
                    <div class="assembly-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="webpack nl">Webpack</div>
                            <!-- <div class="parcel nl">Parcel</div> -->
                            <div class="gulp nl">Gulp</div>
                        </div>
                    </div>
                    <div class="framework-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="react nl">react</div>
                            <div class="vue nl">vue</div>
                            <div class="angular nl">angular</div>
                            <div class="nest nl">Nest</div>
                            <!-- <div class="express">ExpressJS</div> -->
                        </div>
                    </div>
                    <div class="base-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="html l">HTML</div>
                            <div class="css l">CSS</div>
                            <div class="js l">JavaScript</div>
                            <div class="tp nl">TypeScript</div>
                            <div class="node l">Node</div>
                            <div class="python l">Python</div>
                            <div class="bootstrap l">bootstrap</div>
                            <!-- <div class="ruby">Ruby</div> -->
                            <div class="php nl">PHP</div>
                        </div>
                    </div>
                    <div class="git-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="git nl">GIT</div>
                        </div>
                    </div>
                    <div class="gpt-box">
                        <div class="logo-skills">
                            <div></div>
                        </div>
                        <div class="icon-skills">
                            <div class="gpt l">GPT</div>
                            <div class="coppilot l">COPPILOT</div>
                        </div>
                    </div>
                    <div class="explanation">
                        <div class="learned">Вже вивчено</div>
                        <div class="not-learned">В процесі вивчення</div>
                    </div>
                </div>
`
const htmlContentAboutPortfolio = `
    <div id="PORTFOLIO">
                    <div class="example-1">ЗРАЗОК</div>
                    <div class="example-2">ЗРАЗОК</div>
                    <div class="example-3">ЗРАЗОК</div>
                    <div class="example-4">ЗРАЗОК</div>
                    <div class="example-5">ЗРАЗОК</div>
                    <div class="example-6">ЗРАЗОК</div>
                    <div class="example-7">ЗРАЗОК</div>
                </div>
`