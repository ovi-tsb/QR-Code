# if Rails.env.production?
#   CarrierWave.configure do |config|
#     # config.fog_provider = 'fog/aws'                        # required
#     config.fog_credentials = {
#       provider:              'AWS',                        # required
#       aws_access_key_id:     ENV["S3_KEY"],        # required
#       aws_secret_access_key: ENV["S3_SECRET"],        # required
#       region:                ENV['S3_REGION'],
#     }
#     config.fog_directory  = ENV["S3_BUCKET"]              # required
#     # config.fog_public = false
#     #     config.storage = :fog
#     config.fog_public     = false                                             # optional, defaults to true
#     config.fog_authenticated_url_expiration = 600 
#   end
# end