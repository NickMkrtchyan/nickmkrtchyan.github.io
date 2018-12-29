<?php

include_once(dirname(__FILE__) . '/bits/common.php');
commonHeaders();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Flat Desk</title>

 

    <?php include_once(dirname(__FILE__) . '/bits/meta_header.php');?>

  </head>
  <body class="home">
<?php include_once(dirname(__FILE__) . '/bits/navbar_top.php');?>

    <section>
      <div id="home">
        <div class="home-header">
          <span>Flat Desk</span>
        </div>
        <a href="#projects"><div class="home-button"><span class="fui-triangle-down"></span></div></a>
      </div>
      <div id="projects">
        <div class="section-header">
          <span>Projects</span>
        </div>
        
        <div class="row project-row">
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
        </div>
        <div class="row project-row">
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
        </div>
        <div class="row project-row">
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <div class="col-md-3 project-item">
            <div id="project-item-title">Project Title</div>
            <div id="project-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus sed diam vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
        </div>

        <a href="projects.php"><div class="projects-more"><span>+</span></div></a>

      </div>

      <div id="contact">
         <div class="section-header">
          <span>Request A FlatDesk</span>
        </div>
        <div id="contact-area">
          <form method="post" action="contactengine.php">
            <input type="text" name="Name" id="Name" placeholder="name" />

            <input type="text" name="Email" id="Email" placeholder="email" />
      
            <textarea name="Message" rows="20" cols="20" id="Message" placeholder="message"></textarea>

            <input type="submit" name="submit" value="Submit" class="submit-button" />
          </form>
          
          <div style="clear: both;"></div>
        </div>
      </div>

      <div class="footer">
        <h4>Thank you.</h4>
        <div class="social-icon-list">
          <span class="fui-facebook"></span>
          <span class="fui-twitter"></span>
          <span class="fui-googleplus"></span>
        </div>
      </div>

    </section>

    <?php include_once(dirname(__FILE__) . '/bits/footer.php');?>

  </body>



