const Booking = require('../models/booking.js');

module.exports.createBooking = (booking) => {
    const newBooking = new Booking(booking);

    return newBooking.save();
};

module.exports.getBookings = (query, projection) => {
    return Booking.find(query, projection);
};

module.exports.getBookingsByStore = (id) => {
    return Booking.find({
        $and: [
            {storeId: id},
            /*{canceled: false}*/
        ]
    })
};

module.exports.getBookingsByUser = (id) => {
    return Booking.aggregate([
        {
            $match: { $and: [ { "userId": id }, { "canceled": "false" } ] }
        },
        {
            $project : {
                canceled: 0
            }
        },
        {
            $group : { _id : "$city", booking: { $push: "$$ROOT" } }
        }
    ])
};

module.exports.getPopularStoreList = () => {
    return Booking.aggregate([
        {
            $match: {  "canceled": "false" }
        },
        {
            '$group': {
                '_id': '$storeId',
                'number_reservations': {$sum: 1}
            }
        }, {
            '$sort': {
                'number_reservations': -1
            }
        }, {
            '$limit': 10
        }
    ]);
}

module.exports.cancelBookings = (id) => {
    return Booking.update({_id: id}, {canceled: true});
};

module.exports.dateExists = (date, storeId) => {
    return Booking.exists({serviceDate: date, storeId: storeId});
};

module.exports.getStoreFromID = (bookingID) => {
    return Booking.findOne({_id: bookingID}, 'storeId')
};

module.exports.getUserFromID = (bookingID) => {
    return Booking.findOne({_id: bookingID}, 'userId')
};

module.exports.reschedule = (id, bookingDate, serviceDate) => {
    return Booking.findByIdAndUpdate(id, {
        serviceDate: serviceDate,
        bookingDate: bookingDate,
        wasRescheduled: true
    });
};

module.exports.count = (storeId, date_i, date_f, canceled) => {
    /*
    return Booking.find({
        $and: [
            {
                storeId: storeId
            },
            {
                serviceDate: {
                    $gte: new Date(date_i),
                    $lt: new Date(date_f)
                }
            },
            {
                canceled: canceled
            }
        ]
    })
    */

    return Booking.aggregate([
        {
            $match: {
                $and: [
                    {
                        storeId: storeId
                    },
                    {
                        serviceDate: {
                            $gte: new Date(date_i),
                            $lt: new Date(date_f)
                        }
                    },
                    {
                        canceled: canceled.toString()
                    }
                ]
            }
        },
        {
            $group: {
                _id: '$_id',
                count: {$sum: 1}
            }
        },
        {
            $count: "count"
        }
    ]);
};
