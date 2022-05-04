import React from 'react';
import { Toast } from 'react-bootstrap';

export function ConfirmToast({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)}>
        <Toast.Header closeButton={false}>
            <strong className="me-auto">What a wonderfull world!</strong>
            <small>Just now!</small>
        </Toast.Header>
        <Toast.Body>
            You have just chosen a great destination, have fun! 
        </Toast.Body>
    </Toast>
  );
}
