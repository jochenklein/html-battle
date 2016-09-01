/* global app */
app.controller('AppController', function (
      $controller
    , $interval
    , $log
    , $rootScope
    , $scope
    , $sce
    , $timeout
    , $translate
    , BattleSocket
    , ClientIdProvider
)
{
    /**
     * #################################################################################################################
     * ### Properties                                                                                                ###
     * #################################################################################################################
     */

    $scope.clientId       = ClientIdProvider.getClientId();
    $scope.columnClass    = '-12';
    $scope.connected      = false;
    $scope.quest          = '';
    $scope.rowsAndColumns = 1;
    $scope.sourceCodes    = {};

    /**
     * #################################################################################################################
     * ### Event listeners                                                                                           ###
     * #################################################################################################################
     */

    $scope.$on('socket:connect', function (event, data) {
        $log.log('BattleSocket: connect', event, data);

        $scope.connected = true;
    });

    $scope.$on('socket:error', function (event, data) {
        $log.log('BattleSocket: error', event, data);

    });

    $scope.$on('socket:disconnect', function (event, data) {
        $log.log('BattleSocket: disconnect', event, data);

        
    });

    $scope.$on('socket:connect_error', function (event, data) {
        $log.log('BattleSocket: connect_error', event, data);


    });

    $scope.$on('socket:reconnecting', function (event, data) {
        $log.log('BattleSocket: reconnecting', event, data);


    });

    $scope.$on('socket:reconnect_attempt', function (event, data) {
        $log.log('BattleSocket: reconnect_attempt', event, data);


    });

    $scope.$on('socket:receive_quest', function (event, data) {
        $log.log('BattleSocket: receive_quest', event, data);

        $scope.quest = data.quest;
    });

    $scope.$on('socket:receive_upload', function (event, data) {
        $log.log('BattleSocket: receive_upload', event, data);

        var iFrameSourceCode =  'data:text/html;charset=utf-8,' + encodeURIComponent(data.sourceCode);

        $log.log('BattleSocket: iFrameSourceCode', iFrameSourceCode);

        $scope.sourceCodes[data.id] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'Gsg'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'G52sg'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'Gs525g'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'Gsgdgg'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'Gsgsg'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };

        $scope.sourceCodes[data.id + 'Gs534543g'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };
        $scope.sourceCodes[data.id + 'Gs5343543g'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };
        $scope.sourceCodes[data.id + 'Gs5345343g'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };
        $scope.sourceCodes[data.id + 'G4s534543g'] = {
            name:       (data.name || null),
            sourceCode: iFrameSourceCode
        };


        var userCount      = Object.keys($scope.sourceCodes).length;
        var rowsAndColumns = 1;

        while (rowsAndColumns * rowsAndColumns < userCount)
        {
            ++rowsAndColumns;
        }

        $scope.rowsAndColumns = rowsAndColumns;
        $scope.columnClass    = '-' + rowsAndColumns;

        $scope.fixHeight();

console.log('test', userCount,  $scope.rowsAndColumns);







    });

    /**
     * #################################################################################################################
     * ### Public scope methods                                                                                      ###
     * #################################################################################################################
     */

    $scope.fixHeight = function ()
    {
        var windowHeight  = $(window).height();
        var navbarHeight  = $('.navbar').height();
        var previewHeight =  windowHeight - navbarHeight;
        var iframe        = (previewHeight / $scope.rowsAndColumns) - navbarHeight;




        $('iframe').height(iframe);


    };

    $scope.init = function ()
    {
        $log.log('AppController: ready');


        $scope.fixHeight();

    };




    /**
     * #################################################################################################################
     * ### After initialization                                                                                      ###
     * #################################################################################################################
     */

    $scope.init();
});