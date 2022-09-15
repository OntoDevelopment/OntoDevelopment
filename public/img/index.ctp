<div id="section-first" class="orange-bg section first-section hidden-xs">

    <div id="logo" class="text-center">
        <?= $this->Html->image('logo_lg.png', ['OntoDevelopment']) ?>
    </div>

</div>


<div id="tech" class="section">
    <div class="vmiddle">
        <div class="container">
            <h2 class="text-center">Full Stack PHP Development</h2>
            <div class="row">
                <div class="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                    <h3><i class="fa fa-code fa-fw"></i> Custom Development</h3>
                    <ul>
                        <li>Business Tools</li>
                        <li>API Integraions</li>
                        <li>Workflow Automation</li>
                        <li>Reporting &amp; Analytics</li>
                    </ul>

                    <h4><i class="fa fa-code-fork fa-fw"></i> Frameworks & Libraries</h4>
                    <ul>
                        <li>CakePHP <sup>3.x 2.x 1.x</sup></li>
                        <li>Laravel <sup>5.x</sup></li>
                        <li>AngularJS <sup>1.x</sup></li>
                        <li>jQuery <sup>2.x 1.x</sup></li>
                        <li>Twitter Bootstrap <sup>3.x 2.x</sup></li>
                    </ul>

                </div>
                <div class="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                    <h3><i class="fa fa-wordpress fa-fw"></i> WordPress</h3>
                    <ul>
                        <li>Custom Themes</li>
                        <li>Custom Plugins</li>
                    </ul>
                    <h3><i class="fa fa-opencart fa-fw"></i> Opencart</h3>
                    <ul>
                        <li>Custom Templates</li>
                        <li>Custom Extensions</li>
                    </ul>
                    <h4><i class="fa fa-rebel fa-fw"></i> Rebel</h4>
                    <ul>
                        <li>Fight the Empire</li>
                        <li>Get your attention</li>
                    </ul>
                </div>
                <div class="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                    <h3><i class="fa fa-facebook-square fa-fw"></i> Facebook</h3>
                    <ul>
                        <li>PHP SDK Integration</li>
                        <li>Javascript SDK Integration</li>
                    </ul>
                    <h3><i class="fa fa-twitter-square fa-fw"></i> Twitter</h3>
                    <ul>
                        <li>API Integration</li>
                    </ul>
                    <h4><i class="fa fa-paypal fa-fw"></i> Paypal</h4>
                    <ul>
                        <li>PHP SDK Integration</li>
                    </ul>
                    <h4><i class="fa fa-credit-card-alt fa-fw"></i> Authorize.Net</h4>
                    <ul>
                        <li>PHP SDK Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="portfolio" class="section orange-bg white">
    <div class="vmiddle">
        <div class="container text-center">
            <h2>Brian Wendt's Portfolio</h2>
            <div class="row text-center">
                <div class="col-md-4" data-toggle="modal"  data-target="#portfolio-vvm">
                    <?= $this->Html->image('portfolio/VillageVoiceMedia.jpg', ['class' => 'img-responsive']) ?>
                    <h4>Village Voice Media</h4>
                </div>
                
                <div class="col-md-4" data-toggle="modal"  data-target="#portfolio-onto">
                    <?= $this->Html->image('portfolio/OntoDevelopment.png', ['class' => 'img-responsive']) ?>
                    <h4>OntoDevelopment (Freelance)</h4>
                </div>
                
                <div class="col-md-4" data-toggle="modal"  data-target="#portfolio-cpg">
                    <?= $this->Html->image('portfolio/cpgraphics.jpg', ['class' => 'img-responsive']) ?>
                    <h4>CP Graphics</h4>
                </div>
            </div>
        </div>
    </div>
</div>

<?= $this->element('portfolio', ['id' => 'vvm', 'title' => 'Village Voice Media']) ?>
<?= $this->element('portfolio', ['id' => 'cpg', 'title' => 'CP Graphics']) ?>
<?= $this->element('portfolio', ['id' => 'onto', 'title' => 'OntoDevelopment (Freelance)']) ?>

<div id="github" class="section">
    <div class="vmiddle">
        <div class="text-center">
            <div><a href="https://github.com/BrianWendt/" target="_blank"><i class="fa fa-github"></i> <em class="sr-only">GitHub</em></a></div>
            <p class="lead"><a href="https://github.com/BrianWendt/" target="_blank">github.com/BrianWendt</a></p>
        </div>
    </div>
</div>

<div id="about" class="section">
    <div class="vmiddle">
        <h1 class="text-center">About Brian Wendt</h1>
        <p class="lead text-center">Lead Developer @OntoDevelopment</p>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <p class="text-justify">Gamer, gardener, outdoorsman, hookah enthusiast, and black coffee drinker. Above all, Brian is a developer and loves it. His first introduction to HTML was when his dad downloaded <i>Arachnophilia Home Page</i> when he was 12 years old. He went on to start using <i>Microsoft Front Page</i> and <i>Adobe Dreamweaver</i> while learning CSS and the basics of Javascript. Brian's first job in the IT world provided more opportunities to learn more web design and dabble in PHP and MySQL.</p>
                    <p class="text-justify">Brian dove head first into development and at age 19 he had his first job as a Web Developer. At age 21 he began working for the national media company <i>Village Voice Media</i> known for the <i>Village Voice</i> and <i>Phoenix New Times</i> news weeklies. A year later Brian became the Lead Developer at <a href="http://printcpg.com" target="_balnk">PrintCPG</a>.</p>
                    <blockquote class="fancy text-center">
                        <p>Nothing in this world is not worth learning.</p>
                        <footer>A Wise Man</footer>
                    </blockquote>
                </div>
            </div>

        </div>
    </div>
</div>

<div id="linkedin" class="section">
    <div class="vmiddle">
        <div class="text-center">
            <div><a href="https://www.linkedin.com/in/brianwendtarizona" target="_blank"><i class="fa fa-linkedin"></i> <em class="sr-only">LinkedIn</em></a></div>
            <p class="lead"><a href="https://www.linkedin.com/in/brianwendtarizona" target="_blank">linkedin.com/in/brianwendtarizona</a></p>
        </div>
    </div>
</div>

<div id="contact" class="section">
    <div class="vmiddle">
        <div class="container">
            <div class="row">
                <div class="col-md-2 text-center">
                    <div id="contact-icons">
                        
                        <a data-email="brian" class="icon-email"><i class="fa fa-envelope fa-fw"></i><div id='contact-arrow'></div></a>
                        <a href="http://fb.me/OntoDevelopment" class="icon-facebook" target="_blank"><i class="fa fa-facebook fa-fw"></i></a>
                        <div class="clearfix"></div>
                        <a href="https://twitter.com/BrianWendtHere" class="icon-twitter" target="_blank"><i class="fa fa-twitter fa-fw"></i></a>
                        <a href="https://www.linkedin.com/in/brianwendtarizona" class="icon-linkedin" target="_blank"><i class="fa fa-linkedin fa-fw"></i></a>
                        <div class="clearfix"></div>
                    </div>

                </div>
                <div class="col-md-8">

                </div>
            </div>
        </div>

    </div>
    <div id="copyright" class="text-muted text-center">
        <p>&copy OntoDevelopement<br/><small>All brand icons are trademarks of their respective owners.</small></p>
    </div>
</div>
<?= $this->Html->css('home') ?>
<?= $this->Html->script('home') ?>