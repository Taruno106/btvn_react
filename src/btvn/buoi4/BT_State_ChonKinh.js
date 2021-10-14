import React, { Component } from 'react'

export default class BT_State_ChonKinh extends Component {

    arrGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        glassDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/BT_ChonKinh/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }
    renderGlassList = () => {
        return this.arrGlass.map((glass, index) => {
            return <div className="row">
                <div className="col-2">
                    <div className="card">
                        <img src={this.state.glassDetail.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.glassDetail.name}</h5>
                            <p className="card-text">{this.state.glassDetail.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        });
        
    }




    render() {
        let styleH1 = {
            backgroundColor: "grey",
            color: "white",
            position: "absolute",
        }
        let bg = {
            background: "url(./img/BT_ChonKinh/background.jpg)",
            height: "720px",
            position: "absolute",
        }
        let posRow = {
            position: "relative",
            justifyContent: "space-evenly",
            alignItems: "center",
            top: "100px",
        }
        let bgRow = {
            backgroundColor: "white",
        }
        return (
            <div className="container-fluid" style={bg}>
                <h1 className="text w-100" style={styleH1}>TRY GLASSES APP ONLINE</h1>
                <div className="row" style={posRow}>
                    <div className="col-2">
                        <img className="img-fluid" src="./img/BT_ChonKinh/model.jpg" alt="" />
                    </div>
                    <div className="col-2">
                        <img className="img-fluid" src="./img/BT_ChonKinh/model.jpg" alt="" />
                    </div>
                </div>

                <div className="row mt-5" style={posRow}>
                    <div className="col-8" style={bgRow}>
                        <div className="row py-5">
                            <div className="col-2">
                                <button className="btn btn-success" onClick={() => {
                                    this.renderGlassList()
                                }}>V1</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success mb-3">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success mb-3">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success mb-3">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success">Black</button>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success">Black</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
