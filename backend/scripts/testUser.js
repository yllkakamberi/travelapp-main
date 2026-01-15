// scripts/testUser.js
(async () => {
    const sequelize = await require('../DB'); 
    const { DataTypes } = require('sequelize');

    // Define User model
    const User = sequelize.define('User', {
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, defaultValue: 'user' },
    });

    try {
        await sequelize.sync({ force: false });
        console.log('✅ Tables synced');

        const user = await User.create({ email: 'test@test.com', password: '1234' });
        console.log('✅ Test user created:', user.toJSON());
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        await sequelize.close();
        console.log('✅ DB connection closed');
    }
})();
