<template>
  <div>
    <div class="header--content">
      <div class="header--content__title">
        Dashboard
      </div>
      <div class="header--content__breadcrumbs">
        Dashboard
      </div>
    </div>
    <div class="content-app__body">
      <h5>Welcome, <strong>Fathan Rohman</strong></h5>
      <br/>
      <b-container>
        <b-row>
          <b-col cols="12">
            <b-row text-center>
              <b-col>
                <div class="counter">
                  <i class="icon-user fa-2x"></i>
                  <h2 class="timer count-title count-number">1500</h2>
                  <p class="count-text">Our Customer</p>
                </div>
              </b-col>
              <b-col>
                <div class="counter">
                  <i class="icon-user fa-2x"></i>
                  <h2 class="timer count-title count-number">1700</h2>
                  <p class="count-text">Happy Clients</p>
                </div>
              </b-col>
              <b-col>
                <div class="counter">
                  <i class="icon-layers fa-2x"></i>
                  <h2 class="timer count-title count-number">1290</h2>
                  <p class="count-text">Project Complete</p>
                </div>
              </b-col>
              <b-col>
                <div class="counter">
                  <i class="icon-directions fa-2x"></i>
                  <h2 class="timer count-title count-number">260</h2>
                  <p class="count-text">Coffee With Clients</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4">
            <br/>
            <br/>
            <h5>Log Activity</h5>
            <div class="activity-feed">
              <div class="feed-item">
                <div class="date">Sep 25</div>
                <div class="text">Responded to need <a href="single-need.php">“Volunteer opportunity”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 24</div>
                <div class="text">Added an interest “Volunteer Activities”</div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 23</div>
                <div class="text">Joined the group <a href="single-group.php">“Boardsmanship Forum”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 21</div>
                <div class="text">Responded to need <a href="single-need.php">“In-Kind Opportunity”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 18</div>
                <div class="text">Created need <a href="single-need.php">“Volunteer Opportunity”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 17</div>
                <div class="text">Attending the event <a href="single-event.php">“Some New Event”</a></div>
              </div>
            </div>
          </b-col>
          <b-col cols="8">
            <b-container>
              <b-row>
                <b-col>
                  <br/>
                  <br/>
                  <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
                </b-col>
                <b-col>
                  <br/>
                  <br/>
                  <area-chart :data="{'2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5}"></area-chart>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {name: 'Workout', data: {'2017-01-01 00:00:00 -0800': 3, '2017-01-02 00:00:00 -0800': 4}},
        {name: 'Call parents', data: {'2017-01-01 00:00:00 -0800': 5, '2017-01-02 00:00:00 -0800': 3}}
      ]
    }
  }
}
</script>
