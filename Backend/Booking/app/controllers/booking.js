const Booking = require('../models/booking.js');

module.exports.createBooking = ({bookingDate, serviceDate, userId, storeId, city}) => {
    const newBooking = new Booking({
        bookingDate : bookingDate,
        serviceDate : serviceDate,
        userId : userId,
        storeId : storeId,
        city: city
    });

    return newBooking.save();
};

module.exports.getBookings = (query, projection) => {
    return Booking.find(query, projection);
};

module.exports.getBookingsByStore = (id) => {
    return Booking.find({storeId: id});
};

module.exports.getBookingsByUser = (id) => {
    return Booking.aggregate([
        {
            $match : { "userId": id }
        },
        {
            $group : { _id : "$city", booking: { $push: "$$ROOT" } }
        }
    ])
};

module.exports.getPopularStoreList = () => {
    return Booking.aggregate([
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
    return Booking.findByIdAndDelete(id, function (err, docs) {
    });
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
