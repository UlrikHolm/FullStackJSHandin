const gameArea = {
    "type": "Polygon",
    "coordinates": [
        [
            [
                14.706458151340483,
                55.1026260498136
            ],
            [
                14.706447422504423,
                55.102506357542886
            ],
            [
                14.70675587654114,
                55.102111984319826
            ],
            [
                14.707474708557127,
                55.1022316777716
            ],
            [
                14.70752567052841,
                55.10212119152114
            ],
            [
                14.707716107368467,
                55.10215034764469
            ],
            [
                14.70777779817581,
                55.102055206531446
            ],
            [
                14.708405435085297,
                55.10214727858005
            ],
            [
                14.70806747674942,
                55.10280098402597
            ],
            [
                14.707126021385193,
                55.10265367105593
            ],
            [
                14.706458151340483,
                55.1026260498136
            ]
        ]
    ]
}

const players = [
    {
        "type": "Feature",
        "properties": {
            "name": "Team1-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.706898033618927,
                55.102466460039665
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Team2-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.708046019077301,
                55.10233295656619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team3-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.707214534282684,
                55.10204293024229
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team4-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.708155989646912,
                55.10294983095463
            ]
        }
    }
]

module.exports = {
    gameArea, players
}