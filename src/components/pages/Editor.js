import React, { Component } from 'react'

class Editor extends Component
{
    render()
    {
        return (
            <div class="container" id="editor">
                <div class="row">
                    <div class="center-align">
                        <h2>Polyframe</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col m8 s12" id="image-frame">
                        <div id="spinner" ng-show="loadingImage" ng-style="{'height': canvasHeight, 'width': canvasWidth}"></div>
                        <div ng-show="!loadingImage" class="valign-wrapper">
                            <img id="previewImage" ng-show="previewImage" class="responsive-img valign" />
                            <canvas id="canvas" class="responsive-img valign" ng-show="!previewImage && !loadingImage" height="{{canvasHeight}}" width="{{canvasWidth}}"></canvas>
                        </div>
                    </div>
                    <div class="col s12 m4 editor-controls">
                        <div class="card-panel">
                            <div class="col m12">
                                <form action="#">
                                    <div class="file-field input-field">
                                        <div class="btn color-2">
                                            <span>Image</span>
                                            <input type="file" id="userImg" fileread="userImg" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path" type="text" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-panel valign-wrapper">
                            <div class="col m12">
                                <form action="#" class="valign center-align">
                                    <input type="checkbox" class="filled-in color-2" id="test6" checked="checked" ng-model="showVertices" />
                                    <label for="test6">Display lines</label>
                                </form>
                            </div>
                        </div>
                        <div class="card-panel">
                            <div class="col m12">
                                <form action="#">
                                    <p class="range-field">
                                    <input type="range" id="test5" min="10" max="100" ng-model="polygonSize" />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div class="card-panel">
                            <button class="btn-large polygon-btn color-1 center-align" ng-click="polyframe()" ng-disabled="userImg.length < 1">
                                Polygon it
                            </button>
                        </div>
                    </div>   
                </div>

                {/* </div><!-- harris corner detection --> */}
                <canvas id="world" ng-hide="true"></canvas>
            </div>
        )
    }
}

export default Editor