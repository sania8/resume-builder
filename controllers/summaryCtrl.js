resumeApp.controller('summaryCtrl', function($scope, toastService, utilService, $location, $log) {
    $scope.selectedDeveloperType = 'front-end';
    $scope.displayFrontEndSummary = true;
    $scope.displayBackEndSummary = false;
    $scope.displayFullStackSummary = false;
  /*$scope.displaySummary = function() {
  if ($scope.selectedDeveloperType === 'front-end') {
  $scope.displayFrontEndSummary = true;
  $scope.displayBackEndSummary = false;
  $scope.displayFullStackSummary = false;
  } else if ($scope.selectedDeveloperType === 'back-end') {
  $scope.displayFrontEndSummary = false;
  $scope.displayBackEndSummary = true;
  $scope.displayFullStackSummary = false;
  } else {
  $scope.displayFrontEndSummary = false;
  $scope.displayBackEndSummary = false;
  $scope.displayFullStackSummary = true;
  }
  }*/
  $scope.displaySummary = function() {
    if ($scope.selectedDeveloperType === 'front-end') {
      $scope.displayFrontEndSummary = true;
      $scope.displayBackEndSummary = false;
      $scope.displayFullStackSummary = false;
      $scope.summaries = ["Experienced front-end developer with a strong background in HTML, CSS, and JavaScript. Proficient in responsive web design and development, and skilled in developing user-friendly interfaces for web and mobile applications. Strong understanding of cross-browser compatibility and debugging techniques.", "Highly skilled front-end developer with over 5 years of experience in building responsive, interactive, and visually-appealing websites and web applications. Strong knowledge of HTML, CSS, JavaScript, and jQuery, as well as experience with modern front-end frameworks such as AngularJS and React."];
    } else if ($scope.selectedDeveloperType === 'back-end') {
      $scope.displayFrontEndSummary = false;
      $scope.displayBackEndSummary = true;
      $scope.displayFullStackSummary = false;
      $scope.summaries = ["Experienced back-end developer with over 5 years of experience in developing and maintaining large scale web applications. Proficient in Node.js, Python, and Java, with a strong understanding of database design and management. Proven ability to deliver high-quality, efficient, and maintainable code.", "Skilled back-end developer with a strong background in building and deploying web applications using a variety of technologies including Ruby on Rails, PHP, and MySQL. Experience in developing and integrating RESTful APIs, as well as a solid understanding of software development principles and best practices."];
    } else {
      $scope.displayFrontEndSummary = false;
      $scope.displayBackEndSummary = false;
      $scope.displayFullStackSummary = true;
      $scope.summaries = ["Full-stack Developer Profile Summary 1", "Full-stack Developer Profile Summary 2"];
    }
  }

  
  $scope.populateSummary = function(){
    $scope.biography = $scope.selectedSummary;
  }

  });