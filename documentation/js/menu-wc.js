'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">flight-ticket-booking documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' : 'data-target="#xs-controllers-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' :
                                            'id="xs-controllers-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' : 'data-target="#xs-injectables-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' :
                                        'id="xs-injectables-links-module-AppModule-20eb37625cdd468fc7fa205cfc91df483a067037c1ce4cec1309e096d3787476f03e0d65000cffa325ed25b0436ff450f030bf29dd4a5c19fcd14640dc4edc13"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeatsModule.html" data-type="entity-link" >SeatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' : 'data-target="#xs-controllers-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' :
                                            'id="xs-controllers-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' }>
                                            <li class="link">
                                                <a href="controllers/SeatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' : 'data-target="#xs-injectables-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' :
                                        'id="xs-injectables-links-module-SeatsModule-f6ec2721eaf7414d31a7f45aa75eee97c1b54f9ba34d1b9637168bfb512bb27a7f295843c6cf39bcee25b127259e29981cd36ad3d9cce7dbcca3116cd81a77de"' }>
                                        <li class="link">
                                            <a href="injectables/SeatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserBookingModule.html" data-type="entity-link" >UserBookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' : 'data-target="#xs-controllers-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' :
                                            'id="xs-controllers-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' }>
                                            <li class="link">
                                                <a href="controllers/UserBookingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBookingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' : 'data-target="#xs-injectables-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' :
                                        'id="xs-injectables-links-module-UserBookingModule-619880e4f3b71729adf718a06078d08be05fb14ec5542b5904472a7ea3c2152cd83d7a3e1b3391524e7152f6bfee43d5a8e015e8e242d518f8f2b4fd5b5e972f"' }>
                                        <li class="link">
                                            <a href="injectables/UserBookingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBookingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' : 'data-target="#xs-controllers-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' :
                                            'id="xs-controllers-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' : 'data-target="#xs-injectables-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' :
                                        'id="xs-injectables-links-module-UsersModule-69fc36006e84cb9e9d5a422a6e0e43cd93f6d18b098a6ca5a970539f084943b64c055ebb354ba27ef53f00ce39e9bf75ee9736e7bc540000d2b9f303a5b75540"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStratagy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStratagy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeatsController.html" data-type="entity-link" >SeatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserBookingController.html" data-type="entity-link" >UserBookingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Seats.html" data-type="entity-link" >Seats</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TicketDetails.html" data-type="entity-link" >TicketDetails</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserBooking.html" data-type="entity-link" >UserBooking</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Users.html" data-type="entity-link" >Users</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ExceptionExceptionFilter.html" data-type="entity-link" >ExceptionExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginDTO.html" data-type="entity-link" >loginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeatsDTO.html" data-type="entity-link" >SeatsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeatsRepository.html" data-type="entity-link" >SeatsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketDetailsDTO.html" data-type="entity-link" >TicketDetailsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketDetailsRepository.html" data-type="entity-link" >TicketDetailsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserbookingDTO.html" data-type="entity-link" >UserbookingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBookingRepository.html" data-type="entity-link" >UserBookingRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDTO.html" data-type="entity-link" >UsersDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersRepository.html" data-type="entity-link" >UsersRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStratagy.html" data-type="entity-link" >JwtStratagy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeatsService.html" data-type="entity-link" >SeatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserBookingService.html" data-type="entity-link" >UserBookingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});