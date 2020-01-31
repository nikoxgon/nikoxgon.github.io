//A wrapper to encapsulate all the code
(function(window) {
  function initProgressBar() {
    var ProgressBar = {};
    ProgressBar.singleStepAnimation = 1000; //default value
    // this delay is required as browser will need some time in rendering and then processing css animations.
    var renderingWaitDelay = 200;

    // A utility function to create an element
    var createElement = function(type, className, style, text) {
      var elem = document.createElement(type);
      elem.className = className;
      for (var prop in style) {
        elem.style[prop] = style[prop];
      }
      elem.innerHTML = text;
      return elem;
    };

    var createStatusBar = function(stages, stageWidth, currentStageIndex) {
      var statusBar = createElement(
        'div',
        'status-bar',
        { width: 100 - stageWidth + '%' },
        ''
      );
      var currentStatus = createElement('div', 'current-status', {}, '');

      setTimeout(function() {
        currentStatus.style.width =
          (100 * currentStageIndex) / (stages.length - 1) + '%';
        currentStatus.style.transition =
          'width ' +
          currentStageIndex * ProgressBar.singleStepAnimation +
          'ms linear';
      }, renderingWaitDelay);

      statusBar.appendChild(currentStatus);
      return statusBar;
    };

    var createCheckPoints = function(
      stages,
      stageWidth,
      currentStageIndex,
      fechas
    ) {
      var ul = createElement('ul', 'progress-bar2', {}, '');
      var animationDelay = renderingWaitDelay;
      for (var index = 0; index < stages.length; index++) {
        if (stages[index] === 'En Ruta') {
          var code = 'if(document.getElementById(`mapframe`)){ return }; document.getElementById(`mapiframe`).innerHTML += `<h3 class="modal-title text-center text-primary"><b>Mapa Seguimiento viaje: 18680</b> </h3><br><iframe src="https://www.qanalytics.cl/alerta_mapa_tw/vistacl.aspx?numero=17667" id="mapframe" frameborder="0" width="100%" height="400px" ></iframe>`;';
          var palito = "'";
          var li = createElement(
            'li',
            'section',
            { width: stageWidth + '%' },
            '<a href="javascript:void(0);" id="enruta" onClick='+ palito + code + palito + ' style="text-decoration: underline">' +
              stages[index] +
              '<br>' +
              fechas[index] +
              '</a>'
          );
          // document.getElementById('enruta').addEventListener('click', event => {
          //   console.log(event);
          // });
        } else {
          var li = createElement(
            'li',
            'section',
            { width: stageWidth + '%' },
            stages[index] + '<br>' + fechas[index]
          );
        }
        if (currentStageIndex >= index) {
          setTimeout(
            function(li, currentStageIndex, index) {
              li.className +=
                currentStageIndex > index ? ' visited' : ' visited current';
            },
            animationDelay,
            li,
            currentStageIndex,
            index
          );
          animationDelay += ProgressBar.singleStepAnimation;
        }
        ul.appendChild(li);
      }
      return ul;
    };

    var createHTML = function(wrapper, stages, currentStage, fechas) {
      var stageWidth = 100 / stages.length;
      var currentStageIndex = stages.indexOf(currentStage);

      //create status bar
      var statusBar = createStatusBar(stages, stageWidth, currentStageIndex);
      wrapper.appendChild(statusBar);

      //create checkpoints
      var checkpoints = createCheckPoints(
        stages,
        stageWidth,
        currentStageIndex,
        fechas
      );
      wrapper.appendChild(checkpoints);

      return wrapper;
    };

    var validateParameters = function(stages, currentStage, container) {
      if (
        !(
          typeof stages === 'object' &&
          stages.length &&
          typeof stages[0] === 'string'
        )
      ) {
        console.error('Expecting Array of strings for "stages" parameter.');
        return false;
      }
      if (typeof currentStage !== 'string') {
        console.error('Expecting string for "current stage" parameter.');
        return false;
      }
      if (typeof container !== 'string' && typeof container !== 'undefined') {
        console.error('Expecting string for "container" parameter.');
        return false;
      }
      return true;
    };

    //exposing this function to user;
    ProgressBar.init = function(stages, fechas, currentStage, container) {
      if (validateParameters(stages, currentStage, container)) {
        var wrapper = document.getElementsByClassName(container);
        if (wrapper.length > 0) {
          wrapper = wrapper[0];
        } else {
          wrapper = createElement('div', 'progressbar-wrapper', {}, '');
          document.body.appendChild(wrapper);
        }
        createHTML(wrapper, stages, currentStage, fechas);
      }
    };
    return ProgressBar;
  }

  if (typeof ProgressBar === 'undefined') {
    window.ProgressBar = initProgressBar();
  } else {
    console.log('Progress bar loaded');
  }
})(window);
