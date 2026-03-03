import * as React from 'react';

export default function ReviewRequestEmail({ clientName = 'there' }) {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            color: '#222222',
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid #E8EAEE',
            borderRadius: '8px',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#662046',
                padding: '24px',
                textAlign: 'center'
            }}>
                <div style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                    1TO5CLICK
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: '40px 32px', lineHeight: '1.6' }}>
                <h1 style={{ fontSize: '20px', fontWeight: 'normal', color: '#662046', marginBottom: '24px' }}>
                    Thank you for your feedback
                </h1>

                <p>Hi {clientName},</p>

                <p>
                    I just wanted to sincerely thank you again for your very kind feedback. We’re truly grateful for your thoughtful words and are delighted to hear that you and your family had a smooth and stress-free experience with us.
                </p>

                <p>
                    If you wouldn’t mind, we would greatly appreciate it if you could kindly share the same review on our Google page. It really helps our business and assists other clients in choosing our services with confidence.
                </p>

                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <a href="https://g.page/r/CZ3UijjyN5sWEAE/review" style={{
                        backgroundColor: '#C7A254',
                        color: '#ffffff',
                        padding: '16px 32px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Leave Your Review
                    </a>
                </div>

                <p>
                    Thank you once again for your support. We look forward to assisting you again in the future.
                </p>

                <p style={{ marginTop: '32px' }}>
                    Warm regards,<br />
                    <strong>Maz</strong><br />
                    <span style={{ color: '#747F8A', fontSize: '12px' }}>Strategic Director | 1to5click</span>
                </p>
            </div>

            {/* Footer */}
            <div style={{
                backgroundColor: '#F2F3FA',
                padding: '24px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#747F8A',
                borderTop: '1px solid #E8EAEE'
            }}>
                © 2026 1to5click. All rights reserved.<br />
                This is an automated performance verification message.
            </div>
        </div>
    );
}
