function Game() {
    this.iloscKrokow = 0;
    this.wylosowanyNumer = Math.round(Math.random() * 100);
    this.proponowanaWartosc = 50;
    this.max = 100;
    this.min = 0;
    this.czyWygrana = false;
}


Game.prototype.sprawdzHandler = function ()
{
    console.log(this.proponowanaWartosc + " : " + this.wylosowanyNumer + " " + this.czyWygrana);

    if (this.proponowanaWartosc === this.wylosowanyNumer) {
        this.czyWygrana = true;
        return;
    }

    if(this.proponowanaWartosc < this.wylosowanyNumer) {
        this.min = ++this.proponowanaWartosc;
    }

    if(this.proponowanaWartosc > this.wylosowanyNumer) {
        this.max = --this.proponowanaWartosc;
    }

    this.iloscKrokow++;
};


var todoApp = angular.module("app", []);
todoApp.controller("appController", function ($scope) {
    $scope.game = new Game();

    console.log($scope.game.wylosowanyNumer);
    console.log($scope.game.iloscKrokow);

    $scope.check = function () {
        $scope.game.sprawdzHandler();
    }
});