// המשך components/EditDogModal.tsx
              שם הכלב
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              גזע
            </label>
            <input
              type="text"
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              גיל
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              סטטוס
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full p-2 border rounded-md"
            >
              <option value="available">זמין</option>
              <option value="in_training">באימון</option>
              <option value="adopted">אומץ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              תמונת הכלב
            </label>
            <div className="mt-1 flex items-center">
              {formData.imageUrl && (
                <img 
                  src={formData.imageUrl} 
                  alt={formData.name} 
                  className="h-32 w-32 object-cover rounded-lg mb-2"
                />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="mt-1"
            />
            {uploading && <p className="text-sm text-gray-500">מעלה תמונה...</p>}
          </div>

          <div className="flex justify-end space-x-2 space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md"
            >
              ביטול
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md"
            >
              שמור שינויים
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add .env.local file
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
