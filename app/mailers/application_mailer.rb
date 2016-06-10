class ApplicationMailer < ActionMailer::Base
	default from: "calendar@gmail.com"
	layout 'mailer'
end